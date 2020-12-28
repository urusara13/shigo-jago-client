import React, { Component } from "react"; 
import Mainpage from "../Mainpage/Mainpage";

import MypageInfo from "./MypageInfo"


class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
      const { logoutHandlerSimple, accessToken, isLogin } = this.props;

      return (
        isLogin ? 
          <MypageInfo 
            accessToken={accessToken}
            logoutHandlerSimple={logoutHandlerSimple} /> :
          <Mainpage />
      )
  }
}

export default Mypage;
