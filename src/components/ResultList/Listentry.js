import React, { Component } from "react"; 
import ListModal from "./ListModal"


class Listentry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openListModal = this.openListModal.bind(this);
    this.closeListModal = this.closeListModal.bind(this);
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
    const { isModalOpen } = this.state

    return (
      <>
      <div onClick={this.openListModal} >
        <img alt='' src={list.firstimage} height='100' width='110'></img>
        <span>{list.title} </span>
        <span>{list.addr1} </span>
      </div>
      <ListModal isOpen={isModalOpen} list={list} close={this.closeListModal}></ListModal>
      </>
    )
  }


}

export default Listentry;
