import React from "react";
import { withRouter, Switch, Redirect, Route } from "react-router-dom";

import Mainpage from './components/Mainpage/Mainpage'
import Mypage from './components/Mypage/Mypage'
import Sitemap from "./components/Sitemap";
import Nav from "./components/Nav"
import SignUpModal from "./components/SignUpModal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      accessToken: '',
    }
    this.logoutHandler = this.logoutHandler.bind(this);
    this.loginHandler = this.loginHandler.bind(this);

  }

  loginHandler(data) {
    this.setState({
      isLogin: true,
      accessToken: data
    })
  }

  logoutHandler() {
    this.setState({
      isLogin: false
    })
  }


  render() {
    const { isLogin, accessToken } = this.state;

    return (
      <div className="container">
        <Nav
          isLogin={isLogin}
          loginHandler={this.loginHandler} />
        <Switch>
          <Route
            exact
            path='/mypage'
            render={() => (
              <Mypage
                isLogin={isLogin}
                accessToken={accessToken}
                logoutHandler={this.logoutHandler} />
            )} />

          <Route exact path='/user/signup' render={() => <SignUpModal isLogin={isLogin} />} />

          <Route
            exact
            path='/'
            render={() => (
              <Mainpage
                isLogin={isLogin}
                accessToken={accessToken}
                loginHandler={this.loginHandler} />
            )} />

          <Route
            path='/'
            render={() => {
              if (isLogin) {
                return <Redirect to='/mypage' />;
              }
              return <Redirect to='/' />;
            }} />
        </Switch>
        <Sitemap />
      </div>
    );
  };
}


export default withRouter(App);

