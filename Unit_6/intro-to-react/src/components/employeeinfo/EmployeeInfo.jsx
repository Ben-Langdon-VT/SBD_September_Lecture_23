import React from 'react'

function EmployeeInfo(props) {
    return (
        <React.Fragment>
            <h1>{props.name}</h1> 
            <ul style = {{listStyleType: "none", textAlign: "left"}}>
                <li>From: {props.city}/{props.state}</li>
                <li>Position: {props.position}</li>
                <li>Favorite Food: {props.food}</li>
            </ul>
        </React.Fragment>
    )
}

export default EmployeeInfo