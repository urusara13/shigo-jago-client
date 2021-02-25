import React, { Component } from 'react';
import './Chat.css'
export default function Chat ({isChat}) {
  return isChat && (
<div className="chatDiv">
      <object aria-labelledby="label1" data={process.env.REACT_APP_CHAT + '/set'} width="510px" height="830px" style={{ "position":"fixed", "top":"200px", "left": "30px" }}></object>
    </div>
  )  
}