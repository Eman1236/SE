import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './MyComponents/Login';
import Main from './MyComponents/Main';
import SignUp from './MyComponents/SignUp';
import Header from './MyComponents/Header';
import Test_Intro from './MyComponents/Test/Test_Intro';
import MultiStepTest from './MyComponents/Test/MultiStepTest';
import Logout from './MyComponents/Logout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  var token = localStorage.getItem('t');
  var fname = localStorage.getItem('fname');
  var lname = localStorage.getItem('lname');
  var isLogged = false
  if (token) {
    isLogged = true;
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/Login"
                element={<Login />}
          />

          <Route exact path="/Logout"
                element={<Logout />}
          />

          <Route exact path="/"
            element={
              <div>
                <Header loggedIn={isLogged}/>
                <SignUp />
              </div>}
          />
          <Route exact path="/Main"
            element={
              <div>
                <Header loggedIn={isLogged} name={fname} />
                <Main loggedIn={isLogged} fname={fname} lname={lname} />
            </div>
          }/>
          <Route exact path="/tests/ccat"
            element={
            <div>
              <Header loggedIn={isLogged} name={fname} />
              <Test_Intro loggedIn={isLogged} />
            </div>
          }/>
          <Route exact path="/start-test"
            element={
              <div>
              <Header loggedIn={isLogged} name={fname} />
              <MultiStepTest loggedIn={isLogged} />
            </div>
          }/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
