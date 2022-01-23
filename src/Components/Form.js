import React, { useState } from 'react'
import SideInfo from './SideInfo'



function Form() {
    const[student, setStudent] = useState({})
    // const {
    //     register, 
    //     handleSubmit,
    //     formState: {errors}, 
    // } useForm({resolver: yupResolver(schema)})


    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value})
    }
    const handleSubmit = (data) => {
        e.preventDefault()
        addStudent(student)
        // console.log(data);
    }
    return (
        <div className="form-page">

            <form className="form" onSubmit={handleSubmit}>

                <input name="name"
                placeholder="First Name"
                onChange={handleChange}/>
                <input name="lastName"
                placeholder="Last Name"
                onChange={handleChange}/>
                <input name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleChange}/>
                 <input name="power"
                placeholder="power"
                onChange={handleChange}/>
                <input name="emailAddress"
                placeholder="Email Address"
                onChange={handleChange}/>
                <button type="submit">Submit</button>


                
            </form>
            <SideInfo />

        </div>
    )
}

export default Form
