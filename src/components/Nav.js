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
    const { kakaoToken, googleToken, deleteKakao, deleteGoogle } = this.props
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')

    if (authorizationCode && (url.pathname === "/google" || url.pathname === "/google/auth")) {
      const getGoogleToken = await axios.post(`${process.env.REACT_APP_URL}/social/google/callback`, {
        authorizationCode: authorizationCode,
        isDelete: false,
        pathname: url.pathname
      })
      googleToken(getGoogleToken.data.data.access_token, url.pathname)
    }

    else if(authorizationCode && url.pathname === "/google/mypage") {
      try{
        const getGoogleToken = await axios.post(`${process.env.REACT_APP_URL}/social/google/callback`, {
        authorizationCode: authorizationCode,
        isDelete: true
      })
      deleteGoogle()
      await axios.post(`https://accounts.google.com/o/oauth2/revoke?token=${getGoogleToken.data.data.access_token}`)
    }
      catch (err) {
        window.open('/mypage', '_self')
      }
    }

    if (authorizationCode && (url.pathname === "/" || url.pathname === '/kakao')) {
      const getkakaoToken = await axios.post(`${process.env.REACT_APP_URL}/social/kakao/callback`, {
        authorizationCode: authorizationCode,
        isDelete: false,
        pathname: url.pathname
      })
      kakaoToken(getkakaoToken.data.data.access_token, url.pathname)
    }
    else if (authorizationCode && url.pathname === "/mypage") {
      const getkakaoToken = await axios.post(`${process.env.REACT_APP_URL}/social/kakao/callback`, {
        authorizationCode: authorizationCode,
        isDelete: true
      })
      
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_JSKEY)
      }
      
      window.Kakao.Auth.setAccessToken(getkakaoToken.data.data.access_token)
      window.Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
          deleteKakao()
          window.open('/mypage', '_self')
        },
        fail: function (error) {
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
         <img className="mainLogo" onClick={()=> window.open('/', '_self')} src={shigojago} alt='shigojago' />
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