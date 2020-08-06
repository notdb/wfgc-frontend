import React from "react";
import { connect } from "react-redux";
import { admin, regStart } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    },
    registration: {
      username1: "",
      password1: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      },
      registration: {
        ...this.state.registration,
        [e.target.name]: e.target.value
      }
    });
  };

  admin = e => {
    e.preventDefault();
    this.props.admin(this.state.credentials).then(() => {
      this.props.history.push("/");
    });
  };

  regStart = e => {
    e.preventDefault();
    this.props.regStart(this.state.registration).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="Login">
        <section className="registrationCard">
          <p>Register Here</p>
          <form onSubmit={this.regStart} className="registrationForm">
            <input
              type="text"
              name="username1"
              value={this.state.registration.username1}
              onChange={this.handleChanges}
              className="form"
            />
            <input
              type="password"
              name="password1"
              value={this.state.registration.password1}
              onChange={this.handleChanges}
              className="form2"
            />
            <button className="registrationButton">Registration</button>
          </form>
        </section>
        <section className="loginCard">
          <p>Login</p>
          <form onSubmit={this.admin} className="loginForm">
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChanges}
              className="form"
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChanges}
              className="form2"
            />
            <button className="loginButton">Login</button>
          </form>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { admin, regStart }
)(Login);
