import React, { Component } from "react"; 
import axios from "axios";

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  getDetail() {
    axios.post('', {
      
    })
  }
  
  render() {
    const { list, isOpen, close } = this.props;
    return (
      isOpen ? 
      <>
      <div className='modal1'>
        <div className='loginModal'>       
        <span className="btnClose" onClick={close}>&times;</span>
        <div>숙소명 : {list.title} </div>
        <div>위치 : {list.addr1} {list.addr2}</div>
        <div>연락처 : {list.tel}</div>
        <img alt='' src={list.firstimage} width='200' height='200'></img>
      </div>
      </div>

      </> :
      null
    )
  }


}

export default ListModal;
