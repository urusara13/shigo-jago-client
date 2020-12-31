import React, { Component } from "react"; 
import { withRouter } from "react-router-dom";

import PaymentDetailModal from "./PaymentDetailModal"
import WriteReviewModal from "./WriteReviewModal"
import EditReviewModal from "./EditReviewModal"

class ReservationListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPaymentModalOpen: false,
      isReviewModalOpen: false,
      isEditModalOpen: false
    };

    this.openPaymentModal = this.openPaymentModal.bind(this);
    this.closePaymentModal = this.closePaymentModal.bind(this);
    this.openReviewModal = this.openReviewModal.bind(this);
    this.closeReviewModal = this.closeReviewModal.bind(this);
    this.openEditModal = this.openEditModal.bind(this);
    this.closeEditModal = this.closeEditModal.bind(this);
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
  openEditModal() {
    this.setState({ isEditModalOpen: true})
  }
  closeEditModal() {
    this.setState({ isEditModalOpen: false})
  }

  render() {
      const { isPaymentModalOpen, isReviewModalOpen, isEditModalOpen } = this.state;
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
      {ele.isReview ? 
      <>
      <button onClick={this.openEditModal}>리뷰수정</button> 
      {isEditModalOpen && <EditReviewModal 
        originReview={ele.review[0]}
        close={this.closeEditModal} 
        accessToken={accessToken} 
        reservationid={ele.id} />}
      </> :
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
export default withRouter(ReservationListEntry);

