import React from 'react';
import Container from 'react-bootstrap/Container';

const Confirmation = () => {
  return (
    <Container style={{marginTop:'50px'}}>
        <h1>Confirmed</h1>

        <p>등록 해주셔서 감사합니다. <br/>
        <strong>개학 일: 2월 5일 금요일 </strong><br/>
        <br/>*** 토요반은 온라인 수업 동안 금요반과 함께 할 예정입니다.
        <br/>등록금: $180<br/>

        <br/>수표 이름:  Korean Catholic School of Seattle
        <br/>보내실 곳:  Yun Kang Debond
        <br/>                <strong>23122 86th PL W, Edmonds, WA 98026</strong>
        <br/>
        <br/>수표는 학교책 픽업 하실때 가져 오셔도 됩니다.
        <br/>한국 학교에 관한  질문이나 의문 사항이 있으시면  김송아 교감 선생님 (425-773-8597)께 연락 주시기 바랍니다.<br/>

        <br/>Covid-19으로 모두가 힘겨운 나날을 보내는 요즘, 가족들과 함께 건강하게 안전하게 잘 지내시기 바랍니다.
        <br/>감사합니다!!
        <br/>
        <br/>Korean school starts: <strong>February 2nd, Friday</strong><br/>
        <br/>*** No Saturday class during the Covid-19, we'll have only Friday classes.
        <br/>Tuition: $180
        <br/><strong>We do not accept cash.</strong></p>
        You may also bring your check during our drive through pick-up of school books/syllabus.<br/>
        Checks payable to: Korean Catholic School of Seattle
        <br/>Send to:    Yun Kang Debond
        <br/>                 23122 86th PL W., Edmonds, WA 98026
        <br/>

        <br/>Stay healthy and Safe.
        <br/>Thank You!
    </Container>
  )
}

export default Confirmation;