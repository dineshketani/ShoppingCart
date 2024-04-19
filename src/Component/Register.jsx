import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Reg.css'

const Register = () => {
    const Navigate = useNavigate()

    const [formdata,setformdata]=useState({
        name:"",
        Mobile:"",
        Email:"",
        password:"",
         

    })

const handlechange=(e)=>{
    const {name,value} =e.target;
    setformdata({
        ...formdata,
        [name]:value
    })
}

const handlesubmit =(e) =>{
    e.preventDefault();
    console.table("Registration Sucessfull",formdata)
    localStorage.setItem('user',JSON.stringify(formdata));
    setformdata({
        name:"",
        Mobile:"",
        Email:"",
        password:"",

     })

    alert("Registration sucessfull");
    Navigate("/login")
}
  return (
    <>
    <div className="hello">
        
        <form onSubmit={handlesubmit}>
        <h2>Registration Form</h2>
        <label>
                <input placeholder='Name' type='text' name='name' value={formdata.name} required onChange={handlechange} />
            </label>
            <br/><br/>
            
            <label>
                <input placeholder='Mobile number' type='number' name='Mobile' value={formdata.Mobile} required onChange={handlechange}/>
            </label>
            <br/><br/>
            <label>
                <input placeholder='Email' type='text' name='Email' value={formdata.Email} required onChange={handlechange}/>
            </label>
            <br/><br/>
            <label>
                <input placeholder='Password' type='text' name='password' value={formdata.password} required onChange={handlechange}/>
            </label>
            <br/><br/>
            
            <button type='submit'>Register</button> 
        </form>

    </div>
    </>
  )
}

export default Register
