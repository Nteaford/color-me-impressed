import { Component } from "react";
import { signUp } from '../../utilities/users-service';

class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
  };

  handleChange = (evt) => {
    // The object passed to the setState is merged with the current state object 
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ""
    });
  };

  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    alert(JSON.stringify(this.state))
  };

  handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
        const formData = {...this.state};
        delete formData.confirm;
        delete formData.error;
        const user = await signUp(formData);
        this.props.setUser(user);      
    } catch {
      // An error occurred 
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  };
  
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <h1>Welcome to Color-Me-Impressed</h1>
      <hr />
      <h2>Register for an Account</h2>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label for="name">Name</label>
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            <label for="password">Password</label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            <label for="confirm">Confirm</label>
            <input type="password" id="confirm" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>SIGN UP</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }

}

export default SignUpForm;