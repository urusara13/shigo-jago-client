import './Mypage.css';
import React, { Component } from "react"; 

import Mainpage from "../Mainpage/Mainpage";
import MypageInfo from "./MypageInfo"

class Mypage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      const { logoutHandlerSimple, accessToken, isLogin } = this.props;

      return (
        isLogin ? 
        <div className="MPmain">
          <MypageInfo 
            accessToken={accessToken}
            logoutHandlerSimple={logoutHandlerSimple} />
        </div> 
        :
          <Mainpage />
          
      )
  }
}

export default Mypage;
