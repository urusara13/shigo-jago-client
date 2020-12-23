import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }
  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };
  handleLogin = () => {

    if (this.state.email === "" || this.state.password === "") {
      this.setState({ errorMessage: '이메일과 비밀번호를 입력하세요' });
    }
    else {
      axios
        .post(
          'http://localhost:4000/signin',
          {
            email: this.state.email,
            password: this.state.password,
          },
        )
        .then((res) => {
          this.props.handleResponseSuccess(res);
        })

    }


  };
  render() {
    return (
      <div>
        <center>
          <h1>Sign In</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <span>이메일</span>
              <input type='email' onChange={this.handleInputValue("email")}></input>
            </div>
            <div>
              <span>비밀번호</span>
              <input type='password' onChange={this.handleInputValue("password")}></input>
            </div>
            <div>
              <Link to='/signup'>아직 아이디가 없으신가요?</Link>
            </div>
            <button className='btn btn-login' type='submit' onClick={this.handleLogin}>
              로그인
            </button>
            {<div className="alert-box">{this.state.errorMessage}</div>}
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Login);
