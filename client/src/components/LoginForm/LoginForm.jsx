import React, {useState} from 'react';
import './LoginForm.css'

function LoginForm(props) {
  const [formData, setFormData] = useState({
    email: "", 
    password: ""
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }
  return (
    <div className="login-form">
      <h1 className='extra-bold'>Login</h1>
      <form className='form-container'
        onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin(formData);
      }}>
        <label htmlFor= 'email'></label>
        <input
          placeholder='Email'
          name='email'
          type='text'
          value={formData.email}
          onChange={handleChange}
        />
        <label htmlFor= 'password'></label>
        <input placeholder='Password'
          name='password'
          type='password'
          value={formData.password}
          onChange={handleChange}
        />
        <button className='button-1'>
          Enter
        </button>
      </form>
      </div>
  );
}

export default LoginForm;