import React from 'react'
import MovieCreate from './MovieCreate'
import {Container, Row, Col} from 'reactstrap'

function MovieIndex({token}) {
    return (
        <>
            <Container>
                <Row>
                    <Col md='4'>
                        <MovieCreate token={token}/>
                    </Col>
                    <Col md='8'>
                        [TABLE TO GO HERE]
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieIndex