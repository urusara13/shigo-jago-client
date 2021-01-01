import React, { Component } from "react";
import axios from "axios";
import './Login.css';
import google from '../images/google.png'
import kakaotalk from '../images/kakao.png'
require('dotenv').config();

axios.defaults.withCredentials = true;

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginId: null,
      password: null,
      errorMessage: null
    };
    this.handleInputValue = this.handleInputValue.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.kakaoOauth = this.kakaoOauth.bind(this)
    this.googleOauth = this.googleOauth.bind(this)

  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  }

  handleLogin() {
    const { loginHandler, close } = this.props;

    if (!(this.state.loginId && this.state.password)) {
      this.setState({ errorMessage: '아이디와 비밀번호를 모두 채워주세요.' })
    } else {
      axios.post('http://localhost:4000/user/login',
        { loginId: this.state.loginId, password: this.state.password },
        { headers: { "Content-Type": "application/json" } })
        .then(res => {
          loginHandler(res.data.data.accessToken)
          close()
        })
        .catch(err => {
          if (err.response.data.error) this.setState({ errorMessage: '아이디 또는 비밀번호가 틀립니다.' })
        });
    }
  }
  async googleOauth() {
    const googleoAuthurl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile email`

    window.location.assign(googleoAuthurl)
  }

  async kakaoOauth() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JSKEY)
    }
    const kakaoAuthurl = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_RESTKEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT}&response_type=code`
    window.location.assign(kakaoAuthurl)
  }

  componentDidMount() {
    this.setState({ errorMessage: null })
  }

  render() {
    const { close } = this.props;
    const { errorMessage } = this.state;

    return (
      <div className="modal1">
        <div className="loginModal">
          <span className="btnClose" onClick={close}>&times;</span>
          <div className="loginModalContents" >
            <div>로그인</div>
            {errorMessage ? <div>{errorMessage}</div> : null}
            <input
              className="email"
              type="text"
              placeholder="E-mail"
              onChange={this.handleInputValue("loginId")} />
            <input
              className="password"
              type="password"
              placeholder="Password"
              onChange={this.handleInputValue("password")} />
            <button className="btnLogin" onClick={this.handleLogin}>로그인</button>
            <div className="socialBox">
              <div className="google" onClick={this.googleOauth}>
                <img className="googleLogo" src={google} alt='google' />
                <div className="googleText">구글 계정으로 신규가입</div>
              </div>
              <div className="facebook" onClick={this.kakaoOauth}>
                <img className="facebookLogo" src={kakaotalk} alt='facebook' />
                <div className="facebookText">카카오 계정으로 신규가입</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default LoginModal