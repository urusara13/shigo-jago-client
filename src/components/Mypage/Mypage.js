import React, { Component } from "react"; 
import { BrowserRouter as Router } from "react-router-dom";
import Mainpage from "../Mainpage/Mainpage";

import MypageInfo from "./MypageInfo"


class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
      const { logoutHandler, accessToken, isLogin } = this.props;

      return (
        isLogin ? 
          <MypageInfo 
            accessToken={accessToken}
            logoutHandler={logoutHandler} /> :
          <Mainpage />
      )
  }
}

export default Mypage;
