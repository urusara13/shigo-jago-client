import React, { Component } from "react"; 
import { BrowserRouter as Router } from "react-router-dom";

import MypageInfo from "./MypageInfo"


class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
      const { logoutHandler, accessToken } = this.props;

      return (
        <Router>
          <MypageInfo 
            accessToken={accessToken}
            logoutHandler={logoutHandler} />
        </Router>
      )
  }
}

export default Mypage;
