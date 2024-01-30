import React, { useRef } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environments';

function MovieCreate({token}) {

    const titleRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();
    const lengthRef = useRef();
    const yearRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Clicked');

        const title = titleRef.current.value;
        const genre = genreRef.current.value;
        const rating = ratingRef.current.value;
        const length = lengthRef.current.value;
        const releaseYear = yearRef.current.value;

        const bodyObj = {
            title,
            genre,
            rating,
            length,
            releaseYear,
        }
        console.log(bodyObj);

        const url = `${baseURL}/movies/`;


        const headers = new Headers();
        // console.log("1",headers);
        headers.append("Content-Type", "application/json");
        // console.log("2",headers)
        // console.log(token);
        headers.append("Authorization", token);
        //* Setting our headers to accept the Json object within the browser

        const requestOptions = {
            headers,
            body: JSON.stringify(bodyObj),
            method: 'POST'
        }
        // console.log("3",headers);

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log(data);
            if (data.message === "success") {
                console.log("Movie Added");
            }
        }

        catch (err) {
            console.error(err.message);
        }

    }

    let ratings = [null, 'G', 'PG', 'PG-13', 'NC-17', 'R'];
    const yearRange = () => {
        let years = [null];
        const thisYear = new Date().getFullYear();
        for (let i = thisYear; i >= 1892; i--) years.push(i);
        return (
            <Input type='select'
                innerRef={yearRef}>
                {
                    years.map((y, i) => {
                        return <option key={i} value={y}>{y}</option>
                    })
                }
            </Input>
        )
    }
    return (
        <>
            <h1>Add Movie</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        autoComplete='off'
                        innerRef={titleRef}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Genre</Label>
                    <Input
                        type='select'
                        autoComplete='off'
                        innerRef={genreRef}
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
                        innerRef={ratingRef}
                    >
                        {ratings.map((r, i) => <option key={i} value={r}>{r}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Length (in minutes)</Label>
                    <Input
                        autoComplete='off'
                        type='number'
                        innerRef={lengthRef}
                    />
                </FormGroup>
                {yearRange()}
                <FullButton>
                    <Button type='submit'>Add Movie</Button>
                </FullButton>
            </Form>
        </>
    );
}

export default MovieCreate