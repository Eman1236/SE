import React from 'react'
import {TextField, Divider, Button, Link} from '@mui/material';
import GoogleLogin from 'react-google-login';
import { useState } from 'react';
import Illustration from './Illustration-01.png'
import logo from './logo.svg'

const Login = () => {
  const [cred, setCred] = useState({
    email: '',
    password: ''
  })
  const [loginData, setLoginData] = useState(
      localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    );
  
  const handleFailure = (result) => {
    alert(result);
  };
  
  const handleLogin = async (googleData) => {
    const res = await fetch('http://localhost:5000/api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogout = () => {
    localStorage.removeItem('loginData');
    setLoginData(null);
  };

  const [Status, setStatus] = useState({
    Message: '',
    Token: ''
  });

  const HandleClick = () => {
    const reqoptions = {
        method: "POST",
        headers: { "Content-Type": "application/JSON" },
        body: JSON.stringify({
            email: cred.email,
            password: cred.password
        })
    }
    const url = "http://localhost:3001/user/login";
    fetch(url, reqoptions)
        .then((response) => response.json())
        .then((json) => {
            setStatus(json["Status"]);
            console.log("JSON:", json);
        })
        .catch((error) => console.log(error));
  }
  if(Status.Message === "Success"){
    localStorage.setItem('t',Status.Token);
    localStorage.setItem('fname',Status.first_name);
    localStorage.setItem('lname',Status.last_name);
    console.log("Last Name:",Status.last_name);
    console.log("Setted Token:",Status.Token);
    window.location.href = "/Main";
  }


  return (
      <div>
          <div style={{width: "50%",height: "100vh", float:"left", backgroundColor: "#346eeb"}}>
              <div>
                  <img style = {{height: "200px", width: "250px", position: 'absolute',left: 3}}  src={logo} alt="logo" />
                  <img style = {{height: "700px", width: "700px"}}  src={Illustration} alt="Pic"/>
              </div>
          </div>

          <div style={{width: "50%", height:"100vh", float:"center", display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <div style={{paddingRight: "10%"}}>
                  <h1>
                      Login
                  </h1>
                  <br/>
                  <br/>
                  <div>
                      {loginData ? (
                          <div>
                          <h3>You logged in as {loginData.email}</h3>
                          <button onClick={handleLogout}>Logout</button>
                          </div>
                      ) : (
                          <GoogleLogin
                          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                          buttonText="Log in with Google"
                          onSuccess={handleLogin}
                          onFailure={handleFailure}
                          cookiePolicy={'single_host_origin'}
                          ></GoogleLogin>
                      )}
                  </div>
                  <br/>
                  <br/>
                  <Divider>or Sign in with Email</Divider>
                  <br/>
                  <br/>
                  <TextField
                      required
                      id="outlined-required"
                      label="Email"
                      value={cred.email}
                      onChange={e => setCred({ ...cred, email: e.target.value })}
                  />
                  <br/>
                  <br/>
                  <TextField
                      required
                      id="outlined-required"
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                      value={cred.password}
                      onChange={e => setCred({ ...cred, password: e.target.value })}
                  />
                  <br/>
                  <br/>
                  <div style={{leftPadding: "10%", rightPadding: "10%"}}>
                    <Button variant="contained" size="medium" onClick={HandleClick}>
                      Sign In
                    </Button>
                  </div>
                  <br/>
                  <div>
                  <Link
                    component="button"
                    variant="body2"
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    Forgot Password
                  </Link>
                  </div>

                  <br/>

                  <div>
                  <Link
                    component="button"
                    variant="body2"
                    href = '/'
                    onClick={() => {
                      window.location.href = "/";
                    }}
                  >
                    Don't have an account? Create one here!
                  </Link>
                  </div>
              </div>
          </div>
        </div>
  );
}

export default Login;