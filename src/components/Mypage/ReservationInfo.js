import axios from "axios"; //axios 초기 설정 필요
import React, { Component } from "react"; 

class ReservationInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo : []
    };
  }
  
  componentDidMount() {
    const { accessToken } = this.props

    axios.get('http://localhost:4000/mypage/reserveinfo', { 
      headers: { "Authorization" : `Bearer ${accessToken}`} 
    })
    .then(res => {
      this.setState({
        userInfo : res.data.data
      })
    })
    .catch(err => console.log(err))
  }

  render() {
      const { userInfo } = this.state;
      //const {  } = this.props;

      return (
        <div className='reservationInfoContainer'>
          <div>예약 내역</div>
          {userInfo.map( (ele, idx) => {
            return(
            <div key={idx} className='reserveContainer'>
              <div >숙소명 : {ele.hotelName}</div>
              <div >체크인 : {ele.checkedin}</div>
              <div >체크아웃 : {ele.checkedout}</div>
              <div >인원수 : {ele.adult + ele.child}</div>
              <div >예약 날짜 : {ele.createdAt.substr(0,10)}</div> 
            </div>
          )})}
        </div>
      )
  }

}
export default ReservationInfo;

