import React, { Component } from "react"; 
import axios from "axios";
import { Link } from "react-router-dom";

class ListModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelDetail: null
    };
  }
  
  async getDetail() {
    const { contentid, contenttypeid } = this.props.list
    const detail = await axios.post('http://localhost:4000/search/detail',{
      contentid: contentid,
      contenttypeid: contenttypeid
    })

    this.setState({
      hotelDetail: detail.data
    })
  }

  componentDidMount() {
    this.getDetail()
  }
  
  render() {
    const { close, reservation } = this.props
    const { hotelDetail } = this.state
    
    const newInfo = {};
    newInfo.reservation = reservation;
    newInfo.hotelDetail = hotelDetail;

    console.log(hotelDetail)
     
    return (
      hotelDetail ?
      <>
      <div className='modal1'>
        <div className='loginModal'>       
        <span className="btnClose" onClick={close}>&times;</span>
        <div>숙소명 : {hotelDetail.title} </div>
        <div>위치 : {hotelDetail.addr1} {hotelDetail.addr2}</div>
        <div>연락처 : {hotelDetail.telname} {hotelDetail.tel}</div>
        <div>상세 : {hotelDetail.overview} </div>
        <img alt='' src={hotelDetail.firstimage} width='200' height='200'></img>
        <div>예약정보-성인: {reservation.adult}</div>
        <div>예약정보-아동: {reservation.child}</div>
        <Link to={{
          pathname: '/payment',
          state: {
            reservationInfo: newInfo}
          }}>예약하기</Link>
      </div>
      </div>
      </> 
      : null
    )
  }


}

export default ListModal;
