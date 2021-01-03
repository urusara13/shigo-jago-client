import React, { Component } from 'react';
import './Chat.css'
export default class Chat extends Component  {
  constructor(props){
      super(props)
  }

  componentDidMount() {
//    const find = setInterval(() => console.log(window[0] === true), 3000)
//    console.log(find)
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
      console.log(4)
  }

  render() {
      const {isChat} = this.props
      return isChat && (
    <div className="chatDiv">
      <object aria-labelledby="label1" data="http://localhost:3080/set" width="400px" height="600px" style={{"float": "right", "position":"relative", "top":"400px", "left": "10px", "overflow":"hidden" }}></object>
    </div>
  )  
  }

}