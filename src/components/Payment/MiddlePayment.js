import React, { Component } from "react";
import './Payment.css';
import PaymentModal from "./PaymentModal"

export default class MiddlePayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      howPay: 'card',
      isModalOpen: false
    };
    this.handleInputValue = this.handleInputValue.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  handleInputValue = (key) => (e) => {
    this.setState({ [key]: e.target.value });
  }

  render() {
    const { hotelDetail, reservation, totalPrice } = this.props.location.state.reservationInfo
    const { accessToken } = this.props;
    const { howPay, isModalOpen } = this.state

    return (
      <>
      <div className='middlePayModal'>
        <div className='container1'>
          <div className='hotelImage'>
            <img alt='' src={hotelDetail.firstimage}></img>
          </div>
          <div className='reservationInfo'>
            <div>숙소명 : {hotelDetail.title} </div>
            <div>위치 : {hotelDetail.addr1} {hotelDetail.addr2}</div>
            <div>예약정보-성인: {reservation.adult}</div>
            <div>예약정보-아동: {reservation.child}</div>
            <div>예약정보-체크인: {reservation.checkIn}</div>
            <div>예약정보-체크아웃: {reservation.checkOut}</div>
            <div>금액: {this.numberWithCommas(totalPrice)}</div>
          </div>
          <div className='howPay'>
            <select className="PI_payment__input" value={this.state.howPay} onChange={this.handleInputValue("howPay")} >
              <option value='card'>카드</option>
              <option value='account'>계좌이체</option>
            </select>
            <button onClick={this.openModal}>결제하기</button>
            {isModalOpen && <PaymentModal
              howPay={howPay}
              accessToken={accessToken}
              close={this.closeModal}
              res={reservation}
              price={totalPrice}
              hotelName={hotelDetail.title} />}
            <div></div>
          </div>
        </div>
        </div>
      </>
    )
  }
}

