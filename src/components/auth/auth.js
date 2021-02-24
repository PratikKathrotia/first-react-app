import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AuthActions } from '../../+state';

import './auth.css';

class AuthComponent extends Component {
  state = {
    auth: { email: '', password: '' },
    isValid: false,
    isSignUp: true,
  };

  handleInputChange = (event, input) => {
    this.setState((prevState) => {
      const updatedAuth = {
        ...prevState.auth,
        [input]: event.target.value,
      };
      const isValid = !!updatedAuth.email && !!updatedAuth.password;
      return {
        auth: updatedAuth,
        isValid: isValid,
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.isValid) {
      this.state.isSignUp
        ? this.props.signupUser({ ...this.state.auth })
        : this.props.authenticateUser({ ...this.state.auth });
    }
  };

  handleAccountToggle = (event) => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
    }));
  };

  render() {
    return (
      <div className="Auth">
        <h3>{this.state.isSignUp ? 'Sign up' : 'Sign in'}</h3>
        <div>
          <input
            type="checkbox"
            checked={this.state.isSignUp}
            onChange={(e) => this.handleAccountToggle(e)}
          />
          <span>New account?</span>
        </div>
        <form className="auth_Form">
          <div className="field">
            <label className="field_Label">Email</label>
            <input
              type="email"
              className="field_Input"
              placeholder="Enter email"
              value={this.state.auth.email}
              onChange={(event) => this.handleInputChange(event, 'email')}
            />
          </div>
          <div className="field">
            <label className="field_Label">Password</label>
            <input
              type="password"
              className="field_Input"
              placeholder="Enter password"
              value={this.state.auth.password}
              onChange={(event) => this.handleInputChange(event, 'password')}
            />
          </div>
          <div className="field">
            <input type="submit" onClick={(event) => this.handleSubmit(event)} />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  authenticateUser: (data) => dispatch(AuthActions.authenticateUser(data)),
  signupUser: (data) => dispatch(AuthActions.signupUser(data)),
});

export const Auth = connect(null, mapDispatchToProps)(AuthComponent);
