import React from "react";
import Nav from './components/Nav';
import Search from './components/Search';
import Sitemap from './components/Sitemap';
import { BrowserRouter as Router } from "react-router-dom";

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
      <Router>
        <div className="container">
          <Nav 
            isLogin={isLogin}
            accessToken={accessToken}
            loginHandler={this.loginHandler} />
          <Search />
          <Sitemap />
        </div>
      </Router>
    );
  };
}


export default App;
