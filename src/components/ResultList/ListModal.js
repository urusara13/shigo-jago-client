import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './List.css';
import './listModal.css';

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelDetail: null,
      review: null
    };
    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  async getDetail() {
    const { contentid, contenttypeid } = this.props.list
    const detail = await axios.post('http://localhost:4000/search/detail', {
      contentid: contentid,
      contenttypeid: contenttypeid
    })

    if (!detail.data.firstimage) {
      detail.data.firstimage = 'http://image.pensionlife.co.kr/penimg/pen_1/pen_19/1977/9734f7418fcc01a2321ba800b1f2c7ee.jpg'
    }

    this.setState({ hotelDetail: detail.data })
  }

  async getReview() {
    const { contentid, contenttypeid } = this.props.list
    const review = await axios.post('http://localhost:4000/detail/review', { 
      contentId: contentid,
      contenttypeId: contenttypeid
    })
    console.log(review.data.data)
    this.setState({review: review.data.data})
  }

  componentDidMount() {
    this.getDetail()
    this.getReview()
  }

  render() {
    const { close, reservation, list, date } = this.props
    const { hotelDetail, review } = this.state

    const newInfo = {}; //Payment props 넘겨주기 위함
    newInfo.reservation = reservation;
    newInfo.hotelDetail = hotelDetail;
    newInfo.totalPrice = list.price;
    newInfo.date = date;

    return (
      hotelDetail ?
        <>
          <div className='modal2'>
            <div className='listModal'>
              <span className="btnClose" onClick={close}>&times;</span>
              <div className="hotelName">{hotelDetail.title} </div>
              <div className="hotelImg">
                <img alt='' src={hotelDetail.firstimage} ></img>
              </div>
              <h2 className="review_reading">위치</h2>
              <div className="hotelAddr">{hotelDetail.addr1} {hotelDetail.addr2}</div>
              <h2 className="review_reading">연락처</h2>
              <div className="hotelNum">{hotelDetail.telname} {hotelDetail.tel}</div>
              <h2 className="review_reading">숙소 설명</h2>
              <div className="hotelDetail">{hotelDetail.overview} </div>
              <h2 className="review_reading">선택 정보</h2>
              <div className="booking_info">
              <span>성인 {reservation.adult}명</span>
              <span>아동 {reservation.child}명</span>
              <span>체크인 {reservation.checkIn}</span>
              <span>체크아웃 {reservation.checkOut}</span>
              </div>
              <h2 className="review_reading">총 금액</h2>
              <div>₩{this.numberWithCommas(list.price)}</div>

              <h2 className="review_reading">리뷰</h2>
              {review && review.map((ele, idx) => (
                <div key={idx} className="LMcomment">
                  <div className="LMctn">
                    <div className="LMctitle">{ele.title}</div>
                    <div className="LMcdes">{ele.description}</div>
                  </div>
                  <div className="LMcdate">{ele.updatedAt.substr(0,10)}</div>
                </div>
              ))}
              <div className="reservation__btn">
                <Link to={{
                  pathname: '/payment',
                  state: {
                    reservationInfo: newInfo
                  }
                }}>예약하기</Link>
              </div>
            </div>
          </div>
        </>
        : null
    )
  }


}

export default ListModal;
