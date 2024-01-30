import React, {useState} from 'react';
import Signup from './signup/Signup';
import Login from './login/Login';
import {Container, Row, Col, Button} from 'reactstrap';
import FullButton from '../buttons/FullButton';

function Auth({updateToken}) {
  const [button, setButton] = useState('Signup');
  const swapForm = () => {
    if (button === "Signup"){
      setButton("Login");
    }
    else{
      setButton("Signup");
    }
  }

  const displayForm = () => {
    if (button === "Signup"){
      return(<Login updateToken={updateToken}/>);
    }
    else{
      return( <Signup updateToken={updateToken}/>);
    }
  }
  return (
    <>
      <Container>
        <Row>
          <Col md = '6'>
            {displayForm()}
          </Col>
        </Row>
      </Container>
      <FullButton></FullButton>
      <Button onClick={swapForm}>{button}</Button>
    </>
  )
}
export default Auth