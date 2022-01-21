import React from 'react'
import Student from './Student'

function StudentsList(props) {
    const listOfStudents = props.list.map(student =>
        <Student student={student} deleteSudent={props.deleteSudent}  />)
    return (
        <div>
            {listOfStudents}
        </div>
    )
}

export default StudentsList
