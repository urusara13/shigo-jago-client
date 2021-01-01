import React, { Component } from "react";
import ListModal from "./ListModal"
import './List.css';

class Listentry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openListModal = this.openListModal.bind(this);
    this.closeListModal = this.closeListModal.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  openListModal() {
    this.setState({ isModalOpen: true })
  }
  closeListModal() {
    this.setState({ isModalOpen: false })
  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  render() {
    const { list, reservation } = this.props
    const { isModalOpen } = this.state

    return (
      <>
        <div className="listings">
          <div className="listings__item">

            <div className="listings__image" onClick={this.openListModal}>
              <img alt='' src={list.image1}></img>
            </div>
            <div className="listings__content">
              <div className="listings__title" onClick={this.openListModal}>
                <h2>{list.title} </h2>
              </div>
              <div className="separator"></div>
              <div className="listings__address" onClick={this.openListModal}>
                <span>{list.addr1} </span>
              </div>
              <span>금액 : {this.numberWithCommas(list.price)} </span>
              <div className="listings__details">
                <div className="listings__rating">
                  <span>5 <span>(14)</span></span>
                </div>
                <div className="listings__price">
                  <div className="listings__price__night">
                    20000원 <span> / 1박</span>
                  </div>
                  <div className="listings__price__total">
                    <span>Total {this.numberWithCommas(list.price)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isModalOpen ? <ListModal list={list} reservation={reservation} close={this.closeListModal}></ListModal> : null}
      </>
    )
  }


}

export default Listentry;
