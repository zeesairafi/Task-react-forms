import { useState } from 'react'
import './App.css';
import Form from './Components/Form'
import HeaderAndTitle from './Components/HeaderAndTitle'

import StudentsList from './Components/StudentsList';

function App() {
  
  const [studentsInfo, setStudentsInfo] = useState([])
  const [show, setShow] = useState(false)
  
 
const addStudent =(newStudent)=>{
  newStudent.id=studentsInfo.length+1
setStudentsInfo([...studentsInfo,newStudent])
}
const deleteStudent=(deleteStudent)=>{
  console.log(deleteStudent);
  let tempStudent = studentsInfo.filter((student)=>student.id !== deleteStudent
  )
  setStudentsInfo(tempStudent);
}
  return (

    <div className="App">
     <HeaderAndTitle showList={setShow} show={show}/>
        {show ? ( <StudentsList list={studentsInfo} deleteStudent={deleteStudent}/>) : (
        
      
     <Form addStudent={addStudent}/>
        )}
    </div>
    
  );
}

export default App;
