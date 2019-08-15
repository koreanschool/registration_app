import React from 'react';
import Container from 'react-bootstrap/Container';

const Confirmation = () => {
  return (
    <Container style={{marginTop:'50px'}}>
        <h1>Confirmed</h1>
        <p> payment details here</p>
        <p> you should receive an email</p>
    </Container>
  )
}

export default Confirmation;