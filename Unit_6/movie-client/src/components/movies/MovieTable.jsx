import { Table, Button } from 'reactstrap';
import React from 'react';
import { baseURL } from '../../environments';
import { useNavigate } from 'react-router-dom';

function MovieTable({token ,movies, fetchMovies}) {
    const navigate = useNavigate();

    async function deleteMovie(id) {
        const url = `${baseURL}/movies/${id}`;
        const headers = new Headers();
        headers.append('Authorization', token);
        headers.append("Content-Type", "application/json");
        let requestOptions = {
            headers,
            method: 'DELETE'
        }
        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            if (data.result === "Movie Removed") {
                navigate("/movie");
            }

        }
        catch (err) {
            console.error(err);
        }
    }

    function buildRows() {
        if (!movies) return (<></>);
        // console.log("Build Rows");
        return (
            movies.map((row, key) => {
                // console.log(row, key);
                return (
                    <tr key = {key}>
                        <th scope="row">
                            {key + 1}
                        </th>
                        <td>
                            {row.title}
                        </td>
                        <td>
                            {row.genre}
                        </td>   
                        <td>
                            {row.rating}
                        </td>
                        <td>
                            {row.length}
                        </td>
                        <td>
                            {row.releaseYear}
                        </td>
                        <td>
                            <Button onClick= {() => navigate("/movie/update/"+row._id)} color='warning'>
                                Edit
                            </Button>
                            <Button onClick= {deleteMovie} color='danger'>
                                Delete
                            </Button>
                        </td>
                    </tr>
                )
            }
            )
        )
    }

    return (
        <Table striped>
            <thead>
                <tr>
                    <th>
                        #
                    </th>
                    <th>
                        Title
                    </th>
                    <th>
                        Genre
                    </th>
                    <th>
                        Rating
                    </th>
                    <th>
                        Length
                    </th>
                    <th>
                        Year
                    </th>
                    <th>Edit / Delete</th>
                </tr>
            </thead>
            <tbody>
                {buildRows()}
            </tbody>
        </Table>
    )
}

export default MovieTable