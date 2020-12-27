import React, { Component } from "react";
import axios from "axios";

axios.defaults.withCredentials = true;

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  }

  handleLogin() {
    const { loginHandler, close } = this.props;

    if (!(this.state.email && this.state.password)) {
      alert('아이디와 비밀번호를 모두 채워주세요.')
    } else {
      axios.post('http://localhost:4000/user/login', 
        { email: this.state.email,
          password: this.state.password }, 
        { headers: { "Content-Type": "application/json" }})
        .then(res => {
          loginHandler(res.data.data.accessToken)
          close()
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { isOpen, close } = this.props;

    return (
      <>
        {isOpen ?
          ( <div className="modal1">
              <div>
                <div className="loginModal">
                  <span className="btnClose" onClick={close}>&times;</span>
                  <div className="loginModalContents" >
                  <div>로그인</div>
                  <input
                    className="email"
                    type="text"
                    placeholder="E-mail"
                    onChange={this.handleInputValue("email")} />
                  <input
                    className="password"
                    type="text"
                    placeholder="Password"
                    onChange={this.handleInputValue("password")} />
                  <button className="btnLogin" onClick={this.handleLogin}> 로그인 </button>
                  <div className="socialBox">
                    <div className="kakao">
                      <div className="kakaoText">카카오 계정으로 신규가입</div>
                    </div>
                    <div className="facebook">
                      <div className="facebookText">페이스북 계정으로 신규가입</div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null
        }
        </>
    );
  }
}


export default LoginModal;




                    
                    