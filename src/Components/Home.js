import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from "./Sign_img"
import { NavLink } from 'react-router-dom';
const Home = () => {

    const[input,setInput]=useState({
name:"",
email:"",
password:"",
date:""
  })

  const[data,setData]=useState([])
 console.log(input);
    const getData=(e)=>{
//    console.log(e.target.value);
const{value,name}=e.target;
console.log(value)

setInput(()=>{
    
    return{
        ...input,[name]:value,
    }
})

    }

const addData=(e)=>{
e.preventDefault();
// console.log(input)
const {name,email,password,date}=input;
if(name===""){
    alert("name field is required")
} else if(email===""){
    alert("email is required")
} else if(!email.includes("@")){
    alert("plz enter valid email id")
} else if(password===""){
    alert("password is required")
}else if(password.length<5){
    alert("plz gives password of length five")
} else if(date===""){
    alert("date field is required")
} else {
    console.log("data added successfully")
    localStorage.setItem("userKey",JSON.stringify([...data,input]))
}
    }



  return (
    <>
    <div className='container mt-4'>

<section className='d-flex justify-content-between'>
<div className='left_data' style={{width:"100%"}}>

    <h3 className='text-center col-lg-5'>Sign Up</h3>
    <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"onChange={getData} name="name" placeholder="Enter Your Name" />
       
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={getData} name="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"onChange={getData} name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" onChange={getData}  name="date" placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" className='col-lg-6'  onClick={addData} type="submit">
        Submit
      </Button>
      <p className='mt-3'> Already Have an Account<span> <NavLink to="/login" >SignIn</NavLink></span></p>
    </Form>
</div>
<Sign_img/>

</section>
 </div>
      </>
  )
}

export default Home