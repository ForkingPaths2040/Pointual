import "./App.css";
import "./mobile.css";
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { loginUser, removeToken, verifyUser } from "./services/auth";

import Login from "./screens/Login/Login";
import Employees from "./screens/Employees/Employees";
import Employee from "./screens/Employee/Employee";
import Navigation from "./layouts/Navigation/Navigation";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
      userData ? history.push("/employees") : history.push("/login");
    };
    handleVerify();
  }, [history]);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    userData ? history.push("/employees") : history.push("/login");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
    history.push("/login");
  };

  return (
    <Navigation currentUser={currentUser} handleLogout={handleLogout}>
      <Switch>
        <Route exact path="/login">
          <Login handleLogin={handleLogin} />
        </Route>

        <Route path="/employees/:id">
          <Employee currentUser={currentUser} />
        </Route>
        <Route path="/employees">
          <Employees currentUser={currentUser} />
        </Route>
      </Switch>
    </Navigation>
  );
}

export default App;
