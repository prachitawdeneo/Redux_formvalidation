import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  const nameInput=useRef(null)

  const emailInput=useRef(null)
  const ageInput=useRef(null)
  const passInput=useRef(null)
  const CpassInput=useRef(null)
  const data=useSelector((state)=>state.addData);
  const dispatch=useDispatch();
  console.log(data.formData)

  return (
   <>
   <Form  className="container">
     <h1 className="text-center">Register</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter Your Name</Form.Label>
    <Form.Control type="text" ref={nameInput} placeholder="Enter Your Name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter your Email address</Form.Label>
    <Form.Control type="text"ref={emailInput} placeholder="Enter your Email address" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Enter your age</Form.Label>
    <Form.Control type="text"ref={ageInput} placeholder="Enter your age" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" ref={passInput} placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"ref={CpassInput}  placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="button" onClick={()=>{dispatch({type:"add",payload:{name:nameInput.current.value,email:emailInput.current.value,age:ageInput.current.value,pass:passInput.current.value,cPass:CpassInput.current.value}})}}>
    Submit
  </Button>
</Form>
{
  data.formData.map(post=>
    <div>
    <ul>
      <li>{post.name}</li>
      <li>{post.email}</li>
      <li>{post.age}</li>
    </ul>
    <hr></hr>
    </div>
  )
}
   </>
  );
}

export default App;
