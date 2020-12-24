import React, { Component } from "react"; 
//import ListModal from "./ListModal"


class Listentry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openListModal = this.openListModal.bind(this);
  }

  openListModal() {
    this.setState({
      isModalOpen: true
    })
  }

  closeListModal() {
    this.setState({
      isModalOpen: false
    })
  }

  render() {
    const { list } = this.props

    return (
      <div onClick={this.openListModal} >
        <div>숙소명: {list.title}</div>
    
      </div>
    )
  }


}

export default Listentry;
