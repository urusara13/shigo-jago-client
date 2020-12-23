//import axios from "axios"; //axios 초기 설정 필요
import React, { Component } from "react"; 

//import Nav from "./Nav";
//import Sitemap from "./Sitemap";


class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };

  this.openLoginModal = this.openLoginModal.bind(this);
  this.closeLoginModal = this.closeLoginModal.bind(this);
  }
  
  openLoginModal() {
    this.setState({
      isModalOpen: true
    })
  }

  closeLoginModal() {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
      const {  } = this.state;

      return (
        <div className='mainpageContainer'>
          {/* <Nav></Nav> */}
          <div className='infoContainer'>메인 페이지 입니다.</div>
          <button onClick={this.openLoginModal}>로그인</button>
          {/* <Sitemap></Sitemap>  */}
        </div>
      )
  }


}

export default Mainpage;
