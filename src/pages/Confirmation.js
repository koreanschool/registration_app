import React from 'react';
import Container from 'react-bootstrap/Container';

const Confirmation = () => {
  return (
    <Container style={{marginTop:'50px'}}>
        <h1>Confirmed</h1>
        <p> 1 학기는 <strong>9/6/2019(금) 9/7/2019(토)</strong> 시작합니다.
        <br/> 1st Semester starts 9/6/2019(Friday) 9/7/2019(Saturday).</p>

        <p>등록 해주셔서 감사합니다. 아래 주소로 우편을 이용하시거나 교무실로 직접가져오셔도 됩니다.
        </p>

        <p>Thank you for your registration.
          You may bring your check to the first day of class at the school office or send your check through the mail. <br/>
        <br/>Pay to the order of: 
        <br/>St. Andrew Kim Korean School 
        <br/>Address: 11700 1st Ave. NE, 
        <br/>Seattle WA 98125
        <br/><strong>We do not accept cash.</strong></p>

        <p>You may expect to receive a confirmational email in a few minutes.</p>
          <br></br>
          Please email us at sakks10@gmail.com or call us at 206.362.2278 for any questions.
          <br></br>
         <p> We look forward to seeing you!</p>
    </Container>
  )
}

export default Confirmation;