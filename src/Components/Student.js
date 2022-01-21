import React from 'react'


function Student(props) {
    
    const student = props.student
    
    return (

        <div className="student">
            <p>{student.name}</p>
            <p>{student.lastName}</p>
            <ul>
                <li>phone number :{student.phoneNumber}</li>
                <li>power: {student.power}</li>
            </ul>
            <p className="delete" onClick={()=>props.deleteStudent(student)}>delete</p>
            {/* <Student student={student} key={student.id} deleteStudent={props.deleteStudent}/> */}
           
        </div>

    )
}

export default Student
