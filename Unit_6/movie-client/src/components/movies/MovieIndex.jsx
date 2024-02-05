import React, {useEffect, useState} from 'react'
import MovieCreate from './MovieCreate'
import MovieTable from './MovieTable'
import {Container, Row, Col} from 'reactstrap'
import { baseURL } from '../../environments'


function MovieIndex({token}) {
    
    const [movies, setMovies] = useState([]);
    // console.log("Movies", movies);
    useEffect(() => {
        if (token) fetchMovies();
    }, [token]);

    async function fetchMovies() {
            if (!token) return;
            const url = `${baseURL}/movies/`;
    
            const headers = new Headers();
            headers.append("Content-Type", "application/json");
            headers.append("Authorization", token);
            // console.log(token);
    
            const requestOptions = {
                method: 'GET',
                headers: headers
            }
            try{
                const res = await fetch(url, requestOptions);
                const data = await res.json();
                // console.log(data);
                setMovies(data.result);
            }
            catch(err){
                console.error(err.message);
            }
    }
    return (
        <>
            <Container>
                <Row>
                    <Col md='4'>
                        <MovieCreate token={token} fetchMovies={fetchMovies}/>
                    </Col>
                    <Col md='8'>
                        <MovieTable token={token} movies={movies} fetchMovies={fetchMovies}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieIndex