import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Mainpage from './components/Mainpage/Mainpage';
import Mypage from './components/Mypage/Mypage';
import Sitemap from "./components/Sitemap";
import Nav from "./components/Nav";
import SignUpModal from "./components/SignUpModal";
import About from "./components/SiteMapSection/About";
import GetHelp from "./components/SiteMapSection/GetHelp";
import Hire from "./components/SiteMapSection/Hire";
import Refund from "./components/SiteMapSection/Refund";
import Payment from "./components/Payment/Payment";

require('dotenv').config();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: '',
      kakaoUserData: null,
      googleUserData: null

    }
    this.logoutHandler = this.logoutHandler.bind(this)
    this.logoutHandlerSimple = this.logoutHandlerSimple.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
    this.kakaoToken = this.kakaoToken.bind(this)
    this.googleToken = this.googleToken.bind(this)
  }

  async googleToken(token) {
    console.log(token)
    const newthis = this
    fetch("https://www.googleapis.com/oauth2/v3/userinfo?alt=json",{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(async obj => {
        newthis.setState({
            googleUserData: obj
        })
        const login = await axios.post('http://localhost:4000/user/google', {
            socialEmail: obj.email,
            socialAccount: obj.sub
          })
        if(login.data.message === "ok") {
            newthis.loginHandler(login.data.data.accessToken)
            newthis.props.history.push('/')
        } 
        else newthis.props.history.push('/user/signup')
    })
  }


  async kakaoToken(token) {
    const newthis = this

    window.Kakao.Auth.setAccessToken(token)
    window.Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: [
          'properties.nickname',
          'kakao_account.email',
        ],
      },
      success: function (response) {
        newthis.setState({
          kakaoUserData: response
        })
        axios.post('http://localhost:4000/user/kakao', {
          socialEmail: response.kakao_account.email,
          socialAccount: response.id
        }).then(res => {
          if (res.data.message === "ok") {
            newthis.loginHandler(res.data.data.accessToken)
            newthis.props.history.push('/')
          }
          else {
            newthis.props.history.push('/user/signup')
          }
        })
      },
      fail: function (error) {
        console.log(error)
      }
    })

  }

  loginHandler(data) {
    this.setState({
      isLogin: true,
      accessToken: data
    })
  }

  logoutHandlerSimple() {
    this.setState({
      isLogin: false,
      accessToken: null
    })
  }

  logoutHandler() {
    const { accessToken } = this.props;
    axios.post('http://localhost:4000/user/logout', {},
      { headers: { "Authorization": `Bearer ${accessToken}` } })
      .then((res) => {
        this.setState({
          isLogin: false,
          accessToken: null
        })
      })
      .then(() => {
        this.props.history.push('/');
      })
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JSKEY)
    }
    if (window.Kakao.Auth.getAccessToken()) {
      console.log('토큰 있음', window.Kakao.Auth.getAccessToken())
      window.Kakao.Auth.logout(() => {
        console.log('로그아웃됨', window.Kakao.Auth.getAccessToken())
      })
    }

  }

  componentDidMount() {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JSKEY)
    }
  }

  render() {
    const { isLogin, accessToken, kakaoUserData, googleUserData } = this.state;

    return (
      <div className="container">
        <Nav
          isLogin={isLogin}
          loginHandler={this.loginHandler}
          logoutHandler={this.logoutHandler}
          kakaoToken={this.kakaoToken}
          googleToken={this.googleToken}
        />
        <Switch>
          <Route path='/user/signup' render={() => <SignUpModal isLogin={isLogin} kakaoUserData={kakaoUserData} googleUserData={googleUserData}/>} />
          <Route path="/about" render={() => <About />} />
          <Route path="/gethelp" render={() => <GetHelp />} />
          <Route path="/hire" render={() => <Hire />} />
          <Route path="/refund" render={() => <Refund />} />
          <Route
            path='/payment'
            render={(obj) => (
              <Payment
                isLogin={isLogin}
                location={obj.location}
                accessToken={accessToken} />
            )} />
          <Route
            path='/mypage'
            render={() => (
              <Mypage
                isLogin={isLogin}
                accessToken={accessToken}
                logoutHandlerSimple={this.logoutHandlerSimple} />
            )} />
          <Route
            path='/'
            render={() => (
              <Mainpage
                accessToken={accessToken}
                loginHandler={this.loginHandler} />
            )} />
        </Switch>
        <Sitemap />
      </div>
    );
  };
}


export default withRouter(App);