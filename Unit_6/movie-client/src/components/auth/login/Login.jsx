/* 
    - Create a login folder within auth.
        - Create a JSX file called login (consider how the file/folder should be set)
    - Create a functional component called Login
    - Setup a form:
        - Above the form, make an h2 that displays "Login"
        - Use components from Reactstrap (hint: consider Signup)
        - No labels are required.
        - Two input fields: 
            - email: use a placeholder to denote "Email"
            - password: use a placeholder to denote "Password"
    - Import useRef:
        - create variables to reference both email & password.
        - incorporate within the Input components
    - Handle Submit
        - Set the form to fire off an async function called "handleSumbit"
            - write is as an arrow function.
        - Within the function
            - console.log both useRef variables that were established.
    - Export the component.
    - Import & mount the Login component within Auth.jsx
        - Note: Frame the component in the same fashion as Signup.
*/
import React, { useRef } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import FullButton from "../../buttons/FullButton"
import { baseURL } from '../../../environments';

function Login({ updateToken }) {
    const navigate = useNavigate();
    /* 
# useRef
- is a hook
- values consist and don't cause re-renders of the page
- returns only one item
    - an object called "current"
-must be imported in with 'react'

import {useRef} from 'react'
*/

    // const [firstName, setFirstName] = useState('');
    const emailRef = useRef("");
    const passwordRef = useRef("");

    async function handleSubmit(e) {
        e.preventDefault();
        // console.log(firstNameRef.current.value);

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email);
        // console.log(password);

        let bodyObj = JSON.stringify({
            email: email,
            password: password
        });

        // console.log(bodyObj);

        const url = `${baseURL}/user/signup`;
        const headers = new Headers();
        headers.append("Content-Type", "application/json");
        //* Setting our headers to accept the Json object within the browser

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            // console.log(data);
            if (data.message === "success") {
                updateToken(data.token);
                navigate("/movie");
            }
        }

        catch (err) {
            console.error(err.message);
        }
    }
    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <Label>Email:</Label>
                <FormGroup>
                    <Input
                        innerRef={emailRef}
                        type="email"
                        autoComplete={'off'}
                        placeholder='your@email.com'
                    />
                </FormGroup>
                <Label>Password:</Label>
                <FormGroup>
                    <Input
                        innerRef={passwordRef}
                        type="password"
                        autoComplete={'off'}
                        placeholder='password'
                    />
                </FormGroup>
                <FullButton>
                    <Button type='submit'>Login</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Login