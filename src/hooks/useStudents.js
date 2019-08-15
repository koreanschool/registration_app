import React from "react";
import { useState, useEffect } from "react";

import Student from '../components/Student';

function useStudents() {
    const [students, setStudents] = useState({
        krName: '',
        engName: '',
        birthdate: '',
        grade: '',
        gender: '',
        fluency: '',
        religion: '',
        dietaryNotes: '',
        comments: '',
        classDay: '',
    });

    // function addStudent() {
    //     setStudents(students+1);
    // }

    // function removeStudent() {
    //     setStudents(students-1);
    // // }
    // function getStudents(registrations) {
    //     let s = [];
    //     console.log(students);
    //     for(let i=0;i<students;i++) {
    //         console.log("showing student " + i);
    //         s.push(<Student key={i} registrations={registrations} studentCount={i}></Student>);
    //     }
    //     return s;
    // }
    return {students, setStudents};
}

export default useStudents;