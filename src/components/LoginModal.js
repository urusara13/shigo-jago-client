import React, { Component } from "react"; 

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    const { isOpen, close } = this.props;

    return (
      <>
      {
        isOpen ? 
        (<div className='modal'>
          <div>모달입니다.</div>
          <button className='close' onClick={close}>확인</button>
        </div> ) :
        null
      }
      </>
      )
    }
  }

export default LoginModal;
