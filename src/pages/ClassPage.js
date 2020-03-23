import React, { useState, useEffect } from 'react';
import firebase from "firebase";
import Constants from '../constants';
import { Row, Col } from 'react-bootstrap';
import Write from '../components/Write';

const ClassPage = (props) => {
    const className = props.className;
    const firebaseRef = firebase
            .database()
            .ref(`${className}/${Constants.year}`);
  return (
    <Row>
        <Col><h2 style={{float:'left'}}>{className}</h2></Col>
        <Write pageName={className} firebaseRef={firebaseRef}></Write>
    </Row>
  )
}

export default ClassPage;