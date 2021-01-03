import React, { Component } from 'react';
import './Chat.css'
export default function Chat ({isChat}) {
  return isChat && (
    <div className="chatDiv">
      <object aria-labelledby="label1" data="http://localhost:3080/set" width="400px" height="600px" style={{"float": "right", "position":"relative", "top":"400px", "left": "10px", "overflow":"hidden" }}></object>
    </div>
  )  
}
