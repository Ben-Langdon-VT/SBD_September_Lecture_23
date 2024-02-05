import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { baseURL } from '../../environments';

const defaultMovie = {
    _id: "12345",
    title: "test",
    genre: "Comedy",
    rating: "PG",
    length: 12345,
    releaseYear: 54321,


}

function MovieEdit({ token }) {
    const navigate = useNavigate();
    const { id } = useParams();

    const [movie, setMovie] = useState(defaultMovie);
    const [movieTitle, setMovieTitle] = useState("");
    const [movieGenre, setMovieGenre] = useState("");
    const [movieRating, setMovieRating] = useState("");
    const [movieLength, setMovieLength] = useState(0);
    const [movieReleaseYear, setMovieReleaseYear] = useState(0);

    //Effect
    //get movie by id
    function handleSubmit(e) {
        e.preventDefaults();
        // console.log(movieTitle); 
    }

    let ratings = [null, 'G', 'PG', 'PG-13', 'NC-17', 'R'];

    async function fetchMovie() {
        const url = `${baseURL}/movies/find-one/${id}`;
        const headers = new Headers();
        headers.append('Authorization', token);
        let requestOptions = {
            headers,
            method: 'GET'
        }
        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            const newMovie = data.result;
            setMovieTitle(newMovie.title);
            setMovieGenre(newMovie.genre);
            setMovieRating(newMovie.rating);
            setMovieLength(newMovie.length);
            setMovieReleaseYear(newMovie.releaseYear);
            setMovie(newMovie);

        }
        catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (token) fetchMovie();
    }, [token])

    async function editMovie() {
        const url = `${baseURL}/movies/edit/${id}`;
        const headers = new Headers();
        headers.append('Authorization', token);
        headers.append("Content-Type", "application/json");

        let bodyObj = {}
        if (movie.title !== movieTitle) bodyObj.title = movieTitle;
        if (movie.genre !== movieGenre) bodyObj.genre = movieGenre;
        if (movie.rating !== movieRating) bodyObj.rating = movieRating;
        if (movie.length !== movieLength) bodyObj.length = movieLength;
        if (movie.releaseYear !== movieReleaseYear) bodyObj.releaseYear = movieReleaseYear;

        const body = JSON.stringify(bodyObj);
        let requestOptions = {
            headers,
            method: 'PATCH',
            body,
        }
        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            if (data.message === "edited") {
                navigate("/movie");
            }

        }
        catch (err) {
            console.error(err);
        }
    }

    

    const yearRange = () => {
        let years = [null];
        const thisYear = new Date().getFullYear();
        for (let i = thisYear; i >= 1892; i--) years.push(i);
        return (
            <Input type='select'
                onChange={e => setMovieReleaseYear(e.target.value)}
                value={movieReleaseYear}>
                {
                    years.map((y, i) => {
                        return <option key={i} value={y}/>
                    })
                }
            </Input>
        )
    }

    const movieProperties = () => {
        // console.log(movie);
        return (
            Object.keys(movie).map((key, index) => {
                if (key === "_id" || key === "owner_id" || key === "__v") return (<></>);
                return (
                    <Col key={index}>
                        {key}: {movie[key]}
                    </Col>
                )
            })
        )
    }

    // const style = {
    //     textAlign: "center",
    //     textDecoration: "underline",
    // }
    return (
        <>


            <Container>
                <Row>
                    <h1>Movie Edit</h1>
                </Row>
                <Row>
                    {movieProperties()}
                </Row>
                <Row>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Title</Label>
                            <Input
                                autoComplete='off'
                                onChange={e => setMovieTitle(e.target.value)}
                                value={movieTitle}
                            >
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Genre</Label>
                            <Input
                                type='select'
                                autoComplete='off'
                                onChange={e => setMovieGenre(e.target.value)}
                                value={movieGenre}
                            >
                                <option value=""></option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Action">Action</option>
                                <option value="Horror">Horror</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Family">Family</option>
                                <option value="Documentary">Documentary</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Rating</Label>
                            <Input
                                type='select'
                                autoComplete='off'
                                onChange={e => setMovieRating(e.target.value)}
                                value={movieRating}
                            >
                                {ratings.map((r, i) => <option key={i} value={r}>{r}</option>)}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Length (in minutes)</Label>
                            <Input
                                autoComplete='off'
                                type='number'
                                onChange={e => setMovieLength(e.target.value)}
                                value={movieLength}
                            />
                        </FormGroup>
                        {yearRange()}

                    </Form>
                </Row>
                <Row>
                        <Button type='submit' onClick={editMovie} color='success'>Update</Button>
                </Row>
            </Container>


        </>
    )
}

export default MovieEdit