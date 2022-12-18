
import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loginOnclick =()=>{
      console.log(username+","+password)
  }

  return (
    <Form>
      <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control onChange={(e)=>setUsername(e.target.value)} value={username} placeholder="Please Enter Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Please Enter Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Button variant="primary" onClick={loginOnclick} >Login</Button>{' '}
        <Button variant="primary" type="submit">Register</Button>
      </Form.Group>
    </Form>
  );
}

export default Login;