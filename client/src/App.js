import './App.css';
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { loginUser, removeToken, verifyUser } from './services/auth';

import Login from './screens/Login/Login'
import Employees from './screens/Employees/Employees';
import Employee from './screens/Employee/Employee';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      if (!userData) {
        history.push('/login')
      }
    }
    handleVerify();
  }, [])

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/employees');
  }

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/login');
  }

  return (
    <Switch>
        <Route path='/login'>
          <Login
            handleLogin={handleLogin}
          />
        </Route>
        <Route path='/employees'>
        <Employees
          currentUser={currentUser}
          handleLogout={handleLogout} />
      </Route>
      <Route path='/employees/:id'>
        <Employee
        currentUser={currentUser}
        handleLogout={handleLogout}/>
      </Route>
      </Switch>
  );
}

export default App;
