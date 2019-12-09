import React from 'react';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    const { email, password } = this.state;
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="name"
                name="name"
                placeholder="Your Email Address"
                value={email}
                onChange={this.handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="passord"
                name="password"
                placeholder="Make it secure"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui fluid buttons">
              <button className="ui primary button" type="submit">
                Login
              </button>
              <div className="or"></div>
              <a className="ui button" onClick={this.props.cancel}>
                Cancel
              </a>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
