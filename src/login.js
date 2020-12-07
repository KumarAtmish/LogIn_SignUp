import React from "react";
import "./styles.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { adminPassword } from "./validation";
import { Link, Redirect } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    name: "",
    password: ""
  };

  handleEmail = (e) => {
    this.setState({ name: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    const { name, password } = this.state;
    console.log(this.state);
    if (name === "" && password === "")
      alert("name and passeord can not be null");
    else {
      if (name === adminPassword.name && password === adminPassword.password)
        alert("correct");
      else alert("wrong");
    }
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) return <Redirect to="/home" />;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <form className="box">
                  <h1>Login</h1>
                  <p className="text-muted">
                    {" "}
                    Please enter your login and password!
                  </p>
                  <input
                    type="text"
                    value={this.state.handleEmail}
                    onChange={(e) => this.handleEmail(e)}
                    name=""
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    value={this.state.handleEmail}
                    onChange={(e) => this.handlePassword(e)}
                    name=""
                    placeholder="Password"
                  />
                  <a className="forgot text-muted" href="#">
                    <Link to="/register">Sign Up</Link>
                  </a>
                  <button onClick={(e) => this.handleSubmit(e)} type="submit">
                    Submit
                  </button>
                  <div className="col-md-12">
                    <ul className="social-network social-circle">
                      <li>
                        <a href="#" className="icoFacebook" title="Facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icoTwitter" title="Twitter">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="icoGoogle" title="Google +">
                          <i className="fab fa-google-plus"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
