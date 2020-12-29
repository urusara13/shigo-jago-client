import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import LoginModal from './LoginModal'
import axios from 'axios';

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
    const { kakaoToken } = this.props
    const url = new URL(window.location.href)
    const authorizationCode = url.searchParams.get('code')
    
    if (authorizationCode) {
      console.log(authorizationCode)
      const getkakaoToken = await axios.post('http://localhost:4000/social/kakao/callback',{
        authorizationCode: authorizationCode
      })
    
      kakaoToken(getkakaoToken.data.data.access_token)
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
          <div className="logo"><Link to="/">쉬고자고</Link></div>
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
                    loginHandler={loginHandler} /> }
                  <Link to="/user/signup">Sign up</Link>
                </>
              }
            </ul>
          </div>
      </nav>
    )
  }
}


export default Nav;