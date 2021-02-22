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
    const { hotelDetail, reservation, totalPrice, date } = this.props.location.state.reservationInfo
    const { accessToken } = this.props;
    const { howPay, isModalOpen } = this.state
    
    return (
      <>
        <div className='container1'>
          <div className='MPheadCtn'>
          <div className='MPhotelName'>{hotelDetail.title}</div>
          <div className='MPhotelAddr'>{hotelDetail.addr1} {hotelDetail.addr2}</div>
          </div>
          <div className='ImgInfoctn'>
          <div className='hotelImage'>
            <img alt='' src={hotelDetail.firstimage}></img>
          </div>
          <div className='reservationInfo'>
            <div className='MPcheckMsg'>선택하신 내용이 맞나요?</div>
            <div className='MPmidCtn'>
            <div className='MPtitleCtn'>
            <div className='MPtitle'>성인</div>
            <div className='MPtitle'>아동</div>
            <div className='MPtitle'>체크인</div>
            <div className='MPtitle'>체크아웃</div>
            <div className='MPtitle'>숙박일수</div>
            <div className='MPtitle'>총 금액</div>
            </div>
            <div className='MPcontentCtn'>
            <div className='MPcontent'>{reservation.adult}</div>
            <div className='MPcontent'>{reservation.child}</div>
            <div className='MPcontent'>{reservation.checkIn}</div>
            <div className='MPcontent'>{reservation.checkOut}</div>
            <div className='MPcontent'>{date}박 {date+1}일</div>
            <div className='MPcontent'>{this.numberWithCommas(totalPrice)} 원</div>
            </div>
            </div>
            <div className='MPfootCtn'>
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
            </div>
            </div>
          </div>
          </div>
         
        </div>
      </>
    )
  }
}

