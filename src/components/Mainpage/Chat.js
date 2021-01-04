import React, { Component } from 'react';
import './Chat.css'
export default function Chat ({isChat}) {
  return isChat && (
    <div className="chatDiv">
      <object aria-labelledby="label1" data="http://localhost:3080/set" width="510px" height="830px" style={{ "float":"left", "position":"relative", "top":"200px", "left": "30px" }}></object>
    </div>
  )  
}
