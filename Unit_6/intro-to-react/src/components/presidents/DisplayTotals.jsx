import React from 'react'

export default function DisplayTotals(props) {
    return (
        <p>
            {props.name} had a total vote count of {props.count}
        </p>
    )
}
