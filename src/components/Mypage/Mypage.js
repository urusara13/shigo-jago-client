import './Mypage.css';
import React, { Component } from "react"; 

import Mainpage from "../Mainpage/Mainpage";
import MypageInfo from "./MypageInfo"

export default function Mypage ({ logoutHandlerSimple, accessToken, isLogin }) {
  return (
    isLogin ? 
    <div className="MPmain">
      <MypageInfo 
        accessToken={accessToken}
        logoutHandlerSimple={logoutHandlerSimple} />
    </div> 
    : <Mainpage />
  )
}
