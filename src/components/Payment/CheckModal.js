import React, { Component } from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";

//미사용 컴포넌트

export default class CheckModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    const { close } = this.props;
     
    return (
      <div className='modal1'>
      <div className='loginModal'>       
      <div>로그인을 먼저 진행해주세요.</div>
      <button>로그인 하러 가기</button>
      <button onClick={close}>닫기</button>
      </div>
      </div>
    )
  }


}

