import React from 'react';
import Header from '../../components/Header/Header';
import hero from '../../assets/images/candidates.png';
import './Login.css'
import LoginForm from '../../components/LoginForm/LoginForm';

function Login(props) {
  return (
    <div>
      <Header />
      <div className='login-hero-container'>
        <LoginForm />
        <img className='hero-image' src={hero} alt="Reviewing candidates illustration" />
          <div className='hero-p'>
            <p className='medium-font' id='time-attendance'>Time and attendance</p>
            <p className='medium-font' id='made-easy'>management made easy.</p>
          </div>
      </div>
      
    </div>
  );
}

export default Login;