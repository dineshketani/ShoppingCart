import React,{useState} from 'react'
import {  NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const Navigate = useNavigate()
    const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

    const [formdata,setformdata]=useState({
        Email:"",
        password:""
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
    // console.table("Login Sucessfull",formdata)
    // setformdata({
    //     Username:"",
    //     password:""

    // })

    if(userData){
        if(formdata.Email === userData.Email && formdata.password === userData.password){
        console.table("Login sucessfull",formdata);
        setformdata({
            Email:"",
            password:""
        });
    }else{
            alert("wrong credentials");
            console.log("wrong credentials");
        }
        }
    Navigate("/")
};
  return (
    <div>
    <form onSubmit={handlesubmit}>
    <h2>Login</h2>
    <div  className="input-box">
        <input type="text" name='Email' placeholder="Email" required value={formdata.Email} onChange={handlechange}/>
    </div>
    <div  className="input-box">
        <input type="password" name='password' placeholder="password" required value={formdata.password} onChange={handlechange}/>
    </div>
    <div className="remember-forgot">
        <NavLink href="#">Forget password</NavLink>
        

    </div>
    
    <button type="submit" className="button">Login</button>
    

      </form>
      </div>

  )
}

export default Login
