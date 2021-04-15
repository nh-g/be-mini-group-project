// NPM Packages
import React from "react";

// Project files
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Auth from "../../services/Auth";
import logo from "../../assets/dumpty.svg";

export default function LoginPage() {
  // Methods
  async function login(loginData) {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  }

  async function register(registrationData) {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6 " style={{ color: "white" }}>
            
            <img className="logo"src={logo}/>
            <p className ="subtitle">Because trash still live</p>
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-12  strong-shadow">
                <LoginForm onSubmit={login} />
              </div>

              <div className="col-12 mt-4">
                <RegisterForm onSubmit={register} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
