import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap';
const style = {
    float: 'right',
    margin: '.5rem',
}

function Logout({updateToken}) {
    const navigate = useNavigate();

    function signout(){
        //clear token
        localStorage.removeItem('token');
        //reset our state to an empty string
        updateToken();
        //route back to auth
        navigate("/");
    }
    return (
        <>
            <Button style={style} color="danger" outline onClick={signout}>Signout</Button>
        </>
    )
}

export default Logout