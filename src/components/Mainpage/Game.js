import React, { Component } from 'react';
import './Chat.css'
export default function Game ({isGame}) {
  return isGame && (
<div className="chatDiv">
      <object aria-labelledby="label1" data={process.env.REACT_APP_URL+'game'} width="1800px" height="830px" style={{ "position":"fixed", "top":"200px", "left": "30px" }}></object>
    </div>
  )  
}