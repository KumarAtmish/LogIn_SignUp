import React from "react";
import "./Register.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class Register extends React.Component {
  state = {
    first_name: "",
    last_name: "",
    password: "",
    password_confirmation: "",
    email: "",
    redirect: false
  };

  handleFirstName = (e) => {
    this.setState({
      first_name: e.target.value
    });
  };
  handleLastName = (e) => {
    this.setState({
      last_name: e.target.value
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    });
  };
  handleConfirmPassword = (e) => {
    this.setState({
      password_confirmation: e.target.value
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };
  handleSubmit = (e) => {
    const { name, password, password_confirmation } = this.state;
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://alpha5-uat.idapex.com/api/v1/users/sign_up", this.state)
      .then((resp) => {
        console.log(resp);
        this.setState({ redirect: true });
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response.data.errors.email)
          alert("email has already been taken");
      });
    if (password !== password_confirmation) {
      alert("password does not match");
    } else if (name === "" && password === "")
      alert("name and passeord can not be null");
    else {
      if (password === password_confirmation) alert("correct");
      else alert("Password does not match");
    }
  };

  render() {
    if (this.state.redirect) return <Redirect to="/login" />;
    return (
      <>
        <div className="container">
          <form
            className="well form-horizontal"
            action=" "
            method="post"
            id="contact_form"
          >
            <fieldset>
              {/* <!-- Form Name --> */}
              <legend>
                <center>
                  <h2>
                    <b>Registration Form</b>
                  </h2>
                </center>
              </legend>
              <br />

              {/* <!-- Text input--> */}

              <div className="form-group">
                <label className="col-md-4 control-label">First Name</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      name="first_name"
                      placeholder="First Name"
                      className="form-control"
                      type="text"
                      value={this.setState.handleFirstName}
                      onChange={(e) => this.handleFirstName(e)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Text input--> */}

              <div className="form-group">
                <label className="col-md-4 control-label">Last Name</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      name="last_name"
                      placeholder="Last Name"
                      className="form-control"
                      type="text"
                      value={this.setState.handleLastName}
                      onChange={(e) => this.handleLastName(e)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Text input--> */}

              <div className="form-group">
                <label className="col-md-4 control-label">Password</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      name="user_password"
                      placeholder="Password"
                      className="form-control"
                      type="password"
                      value={this.setState.handlePassword}
                      onChange={(e) => this.handlePassword(e)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Text input--> */}

              <div className="form-group">
                <label className="col-md-4 control-label">
                  Confirm Password
                </label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user"></i>
                    </span>
                    <input
                      name="confirm_password"
                      placeholder="Confirm Password"
                      className="form-control"
                      type="password"
                      value={this.setState.handleConfirmPassword}
                      onChange={(e) => this.handleConfirmPassword(e)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Text input--> */}
              <div className="form-group">
                <label className="col-md-4 control-label">E-Mail</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-envelope"></i>
                    </span>
                    <input
                      name="email"
                      placeholder="E-Mail Address"
                      className="form-control"
                      type="text"
                      value={this.setState.handleEmail}
                      onChange={(e) => this.handleEmail(e)}
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Select Basic --> */}

              {/* <!-- Success message --> */}
              <div
                className="alert alert-success"
                role="alert"
                id="success_message"
              >
                Success <i className="glyphicon glyphicon-thumbs-up"></i>{" "}
                Success!.
              </div>
              <center>
                <Link to="/login">
                  <p className="register_login">Already have an account ?</p>
                </Link>
              </center>

              {/* <!-- Button --> */}
              <div className="form-group">
                <label className="col-md-4 control-label"></label>
                <div className="col-md-4">
                  <br />
                  <button
                    onClick={(e) => this.handleSubmit(e)}
                    type="submit"
                    className="btn btn-warning"
                  >
                    SUBMIT <span className="glyphicon glyphicon-send"></span>
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </>
    );
  }
}
