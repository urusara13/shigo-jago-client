import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import Mainpage from './components/Mainpage/Mainpage';
import Mypage from './components/Mypage/Mypage';
import Sitemap from "./components/Sitemap";
import Nav from "./components/Nav";

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
              path='/mypage'
              render={() => (
                <Mypage 
                  isLogin={isLogin}
                  accessToken={accessToken}
                  logoutHandler={this.logoutHandler} />
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
