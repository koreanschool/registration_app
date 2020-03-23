import React from 'react';
import { Container, Tab, Row, Col, Nav } from 'react-bootstrap';
import Constants from '../constants';
import ClassPage from './ClassPage';

const Class = () => {
  return (
    <Container style={{marginTop:'50px'}}>
       <Tab.Container id="left-tabs" defaultActiveKey="유치가 (금|토)">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {
                Constants.classes.map(className => (
                  <Nav.Item>
                    <Nav.Link eventKey={className}>{className}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              { 
                Constants.classes.map(className => (
                  <Tab.Pane eventKey={className}>
                    <ClassPage className={className}></ClassPage>
                  </Tab.Pane>
                ))
              }
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  )
}

export default Class;