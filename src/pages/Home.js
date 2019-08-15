import React from 'react';
import Button from 'react-bootstrap/Button';
const Home = () => {
  return (
    <div>
        <div className="jumbotron jumbotron-fluid bg-dark text-center">
        <div className="jumbotron-background">
            <img src="../students.jpg" className="blur img-fluid "/>
        </div>
        <div className="container text-white">
            <h1>St. Andrew Kim Korean School</h1>
            <h2>성 김대건 한국 학교</h2><br></br>
            <p>2019-2020 1학기 등록 | 1st Semester Registration</p>
            <p>Now accepting registrations!</p> 
            <p>
            <Button variant="primary" href="/register">등록 | Register</Button>
            </p>
        </div>
        </div>
    </div>
  )
}

export default Home;