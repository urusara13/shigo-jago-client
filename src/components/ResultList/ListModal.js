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
    const { list } = this.props;
    return (
    <div className='img'>이미지 : </div>
    )
  }


}

export default ListModal;
