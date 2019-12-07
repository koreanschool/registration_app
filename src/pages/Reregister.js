import React from 'react';
import Constants from '../constants';
import useSearch from '../hooks/useSearch';
import Stein from '../components/Stein';
import { Form, Container, Button, Col } from 'react-bootstrap';

const Home = () => {
    const {email, setEmail} = useSearch();
    const handleSubmit = async event => {
        event.preventDefault();
        console.log(email);
        await Stein.searchDatabase(email);
    };

  return (
    <Container style={{marginTop:'50px'}}>
    <Form onSubmit={handleSubmit}>
        <Container>
          <h2>재등록 | Reregister </h2>
          <h4>{Constants.year}</h4>
          <p>1-2학기 재학생만 가능, 신입생은 새로 등록해주세요. <br/>
          Only for returning students, for new students please use the other form.
          </p>
          <Form.Label><strong>부모 이메일 주소 | Parent Email</strong></Form.Label>
          <Form.Row>
            <Col>
                <Form.Control required placeholder="abc@gmail.com" type="email"
                    value={
                        email ? email : ''
                    }
                    onChange={e => {
                        setEmail(e.target.value);
                    }}/>
            </Col>
            <Col>
            <Button variant="info" type="submit">
                Search
            </Button>
            </Col>
          </Form.Row>
        </Container>
    </Form>
    </Container>
  )
}

export default Home;