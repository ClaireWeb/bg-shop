import React from 'react';
import LoginForm from './LoginForm';
import api from '../api';

class LoginPage extends React.Component {
  state = {
    email: '',
    password: ''
  };

  submit = data => api.users.login(data).then(token => console.log(token));

  render() {
    return (
      <div className="ui segment">
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

export default LoginPage;
