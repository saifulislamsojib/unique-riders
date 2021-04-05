import { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});

  const [privateRender, setPrivateRender] = useState(false);

  useEffect(() => {
    const uniqueUser = JSON.parse(localStorage.getItem('uniqueUser'))
    uniqueUser && setUser(uniqueUser);
    setPrivateRender(true);
  }, []);
  
  return (
    <userContext.Provider value={[user, setUser]}>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            {privateRender &&
            <PrivateRoute path='/destination/:id'>
              <Destination />
            </PrivateRoute>}
            {privateRender &&
            <PrivateRoute path='/destination'>
              <Destination />
            </PrivateRoute>}
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/blog'>
              <Blog />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
           { privateRender &&
            <PrivateRoute path='/dashboard'>
              <Dashboard />
            </PrivateRoute>}
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
