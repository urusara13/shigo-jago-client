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
    const { list, reservation } = this.props
    const { isModalOpen } = this.state

    return (
      <>
      <div onClick={this.openListModal} >
        <img alt='' src={list.image1} height='100' width='110'></img>
        <span>{list.title} </span>
        <span>{list.addr1} </span>
      </div>
      {isModalOpen ? <ListModal list={list} reservation={reservation} close={this.closeListModal}></ListModal> : null}
      </>
    )
  }


}

export default Listentry;
