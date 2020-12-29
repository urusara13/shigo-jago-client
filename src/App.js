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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: '',
      kakaoUserData: null
    }
    this.logoutHandler = this.logoutHandler.bind(this)
    this.logoutHandlerSimple = this.logoutHandlerSimple.bind(this)
    this.loginHandler = this.loginHandler.bind(this)
    this.kakaoToken = this.kakaoToken.bind(this)
  }

  kakaoToken(token) {
    const newthis = this
 
    window.Kakao.init('fbb39da1c8ecc519a63cb8852dc84385')
    console.log(window.Kakao.isInitialized())
    window.Kakao.Auth.setAccessToken(token)
    window.Kakao.API.request({
      url: '/v2/user/me',
      data: {
        property_keys: [
          'properties.nickname',
          'kakao_account.email',
        ],
      },
      success: function(response) {
        newthis.setState({
          kakaoUserData: response
        })
      },
      fail: function(error) {
          console.log(error)
      }
    })
    this.props.history.push('/user/signup')
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
    axios.post('http://localhost:4000/user/logout',{},
    { headers: {"Authorization": `Bearer ${accessToken}`}})
    .then((res) => {
      this.setState({
        isLogin: false,
        accessToken: null
      })
    })
    .then(() => {
      this.props.history.push('/');
    }) 
  }

  render() {
    const { isLogin, accessToken } = this.state;

    return (
        <div className="container">
        <Nav
          isLogin={isLogin}
          loginHandler={this.loginHandler} 
          logoutHandler={this.logoutHandler}
          kakaoToken={this.kakaoToken}
        />
        <Switch>
          <Route path='/user/signup' render={() => <SignUpModal isLogin={isLogin} kakaoUserData={this.state.kakaoUserData} />} />
          <Route path="/about" render={() =><About />}/>
          <Route path="/gethelp"render={() =><GetHelp />}/>
          <Route path="/hire"render={() =><Hire />}/>
          <Route path="/refund"render={() =><Refund />}/>
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