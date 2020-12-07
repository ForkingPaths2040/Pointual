import React from 'react';
import './Navigation.css'
import Header from '../../components/Header/Header';

function Navigation(props) {
  return (
    <>
      <Header
      currentUser={props.currentUser}
      handleLogout={props.handleLogout}/>
      {props.children}
    </>
  );
}

export default Navigation;