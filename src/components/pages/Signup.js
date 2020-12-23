import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      mobile: "",
      errorMessage: ""
    };
    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  };

  handleSignup = () => {
    if (this.state.email === "" && this.state.password === "" && this.state.username === ""
      && this.state.mobile === "") {
      this.setState({ errorMessage: '모든 항목은 필수입니다' });//어려웠던부분
    } else {
      axios
        .post(
          'http://localhost:4000/signup',
          {
            email: this.state.email,
            password: this.state.password,
            username: this.state.username,
            mobile: this.state.mobile
          },
        
        .then((response) => {
          //console.log(response)
          if (response.statuscode === 201) {
            alert('가입에 성공하셨습니다!');
          }
        })
        .then(() => {
          this.props.history.push('/login');//가입 후 로그인페이지로 자동리다이렉
        })

    }


  }

  render() {
    return (
      <div>
        <center>
          <h1>Sign Up</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>모든 항목은 필수입니다</div>
            <div>
              <span>이메일</span>
              <input
                type="email"
                onChange={this.handleInputValue("email")}
              ></input>
            </div>
            <div>
              <span>비밀번호</span>
              <input
                type="password"
                onChange={this.handleInputValue("password")}
              ></input>
            </div>
            <div>
              <span>이름</span>
              <input
                type='text'
                onChange={this.handleInputValue("username")}
              ></input>
            </div>
            <div>
              <span>전화번호</span>
              <input
                type='tel'
                onChange={this.handleInputValue("mobile")}
              ></input>
            </div>
            <div>
              <Link to='/login'>이미 아이디가 있으신가요?</Link>
            </div>
            <button
              className="btn btn-signup"
              type='submit'
              onClick={this.handleSignup}
            >
              회원가입
            </button>
            {<div className="alert-box">{this.state.errorMessage}</div>}
          </form>
        </center>
      </div>
    );
  }
}

export default withRouter(Signup);
