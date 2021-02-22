import React, { Component } from "react"; 
import { withRouter } from "react-router-dom";
import "./reservationListEntry.css"
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
      <div className='RLEctn'>
      <div className='RLEctnDetail'>
        <div className='RLEtitle'>숙소명</div><div className='RLEcontent'>{ele.hotelName}</div>
        <div className='RLEtitle'>체크인</div><div className='RLEcontent'>{ele.checkedin}</div>
        <div className='RLEtitle'>체크아웃</div><div className='RLEcontent'>{ele.checkedout}</div>
        <div className='RLEtitle'>인원수</div><div className='RLEcontent'>{ele.adult + ele.child}</div>
        <div className='RLEtitle'>예약 날짜</div><div className='RLEcontent'>{ele.createdAt.substr(0,10)}</div> 
      </div>
      <div className='btnRLE'>
      <button className='btnRLEDetail' onClick={this.openPaymentModal}>예약상세</button>
      {isPaymentModalOpen && <PaymentDetailModal 
        close={this.closePaymentModal} 
        accessToken={accessToken} 
        reservationinfo={ele} />}
      {ele.isReview ? 
      <>
      <button className='btnRLEDetail' onClick={this.openEditModal}>리뷰수정</button> 
      {isEditModalOpen && <EditReviewModal 
        originReview={ele.review[0]}
        close={this.closeEditModal} 
        accessToken={accessToken} 
        reservationid={ele.id} />}
      </> :
      <>
      <button className='btnRLEDetail' onClick={this.openReviewModal}>리뷰작성</button>
      {isReviewModalOpen && <WriteReviewModal 
        close={this.closeReviewModal} 
        accessToken={accessToken} 
        reservationid={ele.id} />}
      </>}
      </div>
      </div>
      )
  }

}
export default withRouter(ReservationListEntry);

