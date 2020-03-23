import React from 'react';
import useAuth from '../hooks/useAuth';
import firebase from 'firebase';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Write from '../components/Write';

const About = () => {
  const [user, loading] = useAuth();
  const firebaseRef = firebase
            .database()
            .ref(`About`);
  return (
    <Container style={{marginTop:'50px'}}>
      <Col><h2>About</h2></Col>
        <Write pageName="About" firebaseRef={firebaseRef}></Write>
    </Container>
  )
}

export default About;