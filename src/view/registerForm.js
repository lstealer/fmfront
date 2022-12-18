
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState('');
  const registerOnclick=()=>{
    console.log(username+" ,"+password+" ,"+repassword)
  }
  return (
    <Form>
      <h1>Register</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} value={username.values} placeholder="Please Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Please Enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password Confirmation</Form.Label>
        <Form.Control onChange={(e)=>setRePassword(e.target.value)} value={repassword} placeholder="Please Enter Password Again" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Button variant="primary" onClick={registerOnclick}>Register</Button>{' '}
        <Button variant="primary" >Back To Login</Button>
      </Form.Group>
    </Form>
  );
}

export default Register;