import { useState } from 'react';
import React  from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_img from './Sign_img';
import { useNavigate } from 'react-router-dom';
const Login = () => {

    const navigate=useNavigate()
    const[input,setInput]=useState({
        
        email:"",
        password:"",
        
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

const getUserArr=localStorage.getItem("userKey")
console.log(getUserArr)

        const {email,password}=input;
         if(email===""){
            alert("email is required")
        } else if(!email.includes("@")){
            alert("plz enter valid email id")
        } else if(password===""){
            alert("password is required")
        }else if(password.length<5){
            alert("plz gives password of length five")
        }  else {
            // console.log("data added successfully")
            // localStorage.setItem("userKey",JSON.stringify([...data,input]))
            if(getUserArr && getUserArr.length){
                const userData=JSON.parse(getUserArr);
                // console.log(userData)
                const userLogin=userData.filter((ele,index)=>{
                    return ele.email===email && ele.password===password
                });
                // console.log(userLogin)
                if(userLogin.length===0){
                    alert("invalid details")
                }else{
                    alert("user login successfully")
                    navigate("/details")
                }
            }
        }
            }
        


  return (
    <>
    <div className='container mt-4'>

<section className='d-flex justify-content-between'>
<div className='left_data' style={{width:"100%"}}>

    <h3 className='text-center col-lg-5'>Sign IN</h3>
    <Form>
      
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={getData} name="email" placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"onChange={getData} name="password" placeholder="Password" />
      </Form.Group>
      
      
      <Button variant="primary" className='col-lg-6'  onClick={addData} type="submit">
        Submit
      </Button>
      <p className='mt-3'> <span>Already Have an Account SignIn</span></p>
    </Form>
</div>
<Sign_img/>

</section>
 </div>
      </>
  )
}

export default Login