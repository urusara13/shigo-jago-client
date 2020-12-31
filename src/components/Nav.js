import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Nav.css';
import shigojago from '../images/sgjg.png'
import LoginModal from './LoginModal'
import axios from 'axios';
require('dotenv').config();

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      buttonName: 'Log in',
      KakaoAccessToken: null
    };
    this.openLoginModal = this.openLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.changeMypage = this.changeMypage.bind(this)

  }

  async componentDidMount() {
    const { kakaoToken, googleToken } = this.props
    const url = new URL(window.location.href)

    const authorizationCode = url.searchParams.get('code')

    if (window.location.pathname === "/google") {
      const getGoogleToken = await axios.post(`http://localhost:4000/social/google/callback`, {
        authorizationCode: authorizationCode,
        isDelete: false
      })
      console.log(getGoogleToken)
      googleToken(getGoogleToken.data.data.access_token)
    }

    if (authorizationCode && url.pathname !== "/mypage") {
      console.log(authorizationCode)
      const getkakaoToken = await axios.post('http://localhost:4000/social/kakao/callback', {
        authorizationCode: authorizationCode,
        isDelete: false
      })
      kakaoToken(getkakaoToken.data.data.access_token)
    }
    else if (authorizationCode && url.pathname === "/mypage") {
      const getkakaoToken = await axios.post('http://localhost:4000/social/kakao/callback', {
        authorizationCode: authorizationCode,
        isDelete: true
      })
      console.log('token', getkakaoToken.data.data.access_token)
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_JSKEY)
      }
      console.log(window.Kakao.isInitialized())
      window.Kakao.Auth.setAccessToken(getkakaoToken.data.data.access_token)
      window.Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          console.log('success', response)
          window.open('/', '_self')
        },
        fail: function (error) {
          console.log(error)
        }
      })

      this.props.history.push('/')
    }
  }

  openLoginModal() {
    this.setState({
      isModalOpen: true
    })
  }

  closeLoginModal() {
    this.setState({
      isModalOpen: false
    })
  }

  changeMypage() {
    this.props.loginHandler();
    this.setState({
      buttonName: 'My page'
    });
  }

  render() {
    const { isLogin, loginHandler, logoutHandler } = this.props;
    const { isModalOpen } = this.state;

    return (
      <nav>
        <div className="logo">
          <Link to="/"><img className="mainLogo" src={shigojago} alt='shigojago' /></Link>
        </div>
        <div className="menu">
          <ul>
            {
              isLogin ?
                <>
                  <Link to="/mypage" className='mypageLink' >My page</Link>
                  <button className='menuLogoutBtn' onClick={logoutHandler}>Log out</button>
                </> :
                <>
                  <button className='menuLoginBtn' onClick={this.openLoginModal}>Sign in</button>
                  {isModalOpen && <LoginModal
                    isLogin={isLogin}
                    close={this.closeLoginModal}
                    changeMypage={this.changeMypage}
                    loginHandler={loginHandler} />}
                  <Link to="/user/signup">Sign up</Link>
                </>
            }
          </ul>
        </div>
      </nav>
    )
  }
}


export default withRouter(Nav)