import axios from "axios"; //axios 초기 설정 필요
import React, { Component } from "react"; 

import PaymentDetailModal from "./PaymentDetailModal"
import WriteReviewModal from "./WriteReviewModal"

class ReservationListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentModalOpen: false,
      isReviewModalOpen: false
    };

    this.openPaymentModal = this.openPaymentModal.bind(this);
    this.closePaymentModal = this.closePaymentModal.bind(this);
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
  }
  
  openPaymentModal() {
    this.setState({ isPaymentModalOpen: true})
  }
  closePaymentModal() {
    this.setState({ isPaymentModalOpen: false})
  }
  openReviewModal() {
    this.setState({ isReviewModalOpen: true})
  }
  closeReviewModal() {
    this.setState({ isReviewModalOpen: false})
  }

  render() {
      const { isPaymentModalOpen, isReviewModalOpen } = this.state;
      const { ele, accessToken } = this.props;
      
    return(
      <>
      <div className='reserveContainer'>
        <div >숙소명 : {ele.hotelName}</div>
        <div >체크인 : {ele.checkedin}</div>
        <div >체크아웃 : {ele.checkedout}</div>
        <div >인원수 : {ele.adult + ele.child}</div>
        <div >예약 날짜 : {ele.createdAt.substr(0,10)}</div> 
      </div>
      <button onClick={this.openPaymentModal}>예약상세</button>
      {isPaymentModalOpen && <PaymentDetailModal 
        close={this.closePaymentModal} 
        accessToken={accessToken} 
        reservationinfo={ele} />}
      {ele.isReviewd ? 
      <button onClick={this.openReviewModal}>리뷰수정</button> :
      <>
      <button onClick={this.openReviewModal}>리뷰작성</button>
      {isReviewModalOpen && <WriteReviewModal 
        close={this.closeReviewModal} 
        accessToken={accessToken} 
        reservationid={ele.id} />}
      </>}
      </>
      )
  }

}
export default ReservationListEntry;

