import React from 'react';
import './LoginForm.css'

function LoginForm(props) {
  return (
    <login className="login-form">
      <h1 className='extra-bold'>Login</h1>
      <form className='form-container'>
        <input placeholder='Email'/>
        <input placeholder='Password' />
        <button className='button-1'>
          Enter
        </button>
      </form>
      </login>
  );
}

export default LoginForm;