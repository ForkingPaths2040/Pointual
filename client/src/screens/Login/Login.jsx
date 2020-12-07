import React from 'react';
import hero from '../../assets/images/candidates.png';
import './Login.css'
import LoginForm from '../../components/LoginForm/LoginForm';
function Login(props) {
  return (
      <div className='login-hero-container'>
        <LoginForm
          handleLogin={props.handleLogin}
          currentUser={props.currentUser}/>
        <img id="content-desktop" className='hero-image' src={hero} alt="Reviewing candidates illustration" />
          <div id="content-desktop" className='hero-p'>
            <p className='medium-font' id='time-attendance'>Time and attendance</p>
            <p className='medium-font' id='made-easy'>management made easy.</p>
          </div>
      </div>
  );
}

export default Login;