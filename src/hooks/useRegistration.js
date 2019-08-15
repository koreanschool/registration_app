import { useState, useEffect } from "react";

function useRegistration(currentStep) {
    const [registration, setRegistration] = useState({});
    // const [studentInfo, setStudentInfo] = useState([{}]);
    // function addToRegistration(newInfo) {
    //     setRegistration({...registration, ...newInfo});
    // }

    // function addStudentToRegistration(newStudentInfo) { // [{},{}]
    //     setStudentInfo(newStudentInfo);
    //     // let students = [];
    //     // if(registration.students !== undefined) {
    //     //     students = registration.students.concat(newStudentInfo);
    //     // }
    //    //setRegistration({...registration, ...{students: newStudentInfo}});
    // }

    return {
        registration, 
        setRegistration
        // addToRegistration,
        // studentInfo,
        // addStudentToRegistration
    };
}

export default useRegistration;