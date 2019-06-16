import React from "react";
import { connect } from "react-redux";
import { admin } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
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

  render() {
    return (
      <div className="Login">
        <p>Login</p>
        <form onSubmit={this.admin}>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { admin }
)(Login);
