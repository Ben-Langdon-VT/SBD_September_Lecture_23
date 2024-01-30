import React, { useRef } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import FullButton from "../../buttons/FullButton"
import { baseURL } from '../../../environments';

function Signup({ updateToken }) {
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
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(firstNameRef.current.value);

    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    let bodyObj = JSON.stringify({
      first: firstName,
      last: lastName,
      email: email,
      password: password
    });

    // console.log(bodyObj);


    const url = `${baseURL}/user/signup`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    //* Setting our headers to accept the JSOn object within the browser

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
      else {
        alert(data.message);
      }


    }

    catch (err) {
      console.error(err.message);
    }


  }
  return (
    <>
      <h2>Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Label>First Name:</Label>
        <FormGroup>
          <Input
            innerRef={firstNameRef}
            autoComplete={'off'}
          />
        </FormGroup>
        <Label>Last Name:</Label>
        <FormGroup>
          <Input
            innerRef={lastNameRef}
            autoComplete={'off'}
          />
        </FormGroup>
        <Label>Email:</Label>
        <FormGroup>
          <Input
            innerRef={emailRef}
            type="email"
            autoComplete={'off'}
          />
        </FormGroup>
        <Label>Password:</Label>
        <FormGroup>

          <Input
            innerRef={passwordRef}
            type="password"
            autoComplete={'off'}
          />
        </FormGroup>
        <FullButton>
          <Button type='submit'>Signup</Button>
        </FullButton>

      </Form>
    </>
  )
}

export default Signup