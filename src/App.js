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

axios.defaults.withCredentials = true;

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
    axios.post('http://localhost:4000/user/logout', 
    { headers: {"Authorization": `token ${this.props.accessToken}`}})
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
        />
        <Switch>
          <Route
          
            path='/mypage'
            render={() => (
              <Mypage
                isLogin={isLogin}
                accessToken={accessToken}
                logoutHandler={this.logoutHandler} />
            )} />
            <Route path='/user/signup' render={() => <SignUpModal isLogin={isLogin} />} />
            <Route path="/about" render={() =><About />}/>
            <Route path="/gethelp"render={() =><GetHelp />}/>
            <Route path="/hire"render={() =><Hire />}/>
            <Route path="/refund"render={() =><Refund />}/>
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
