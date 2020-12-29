import React, { Component } from "react";
import './List.css';
import List from "./List"

class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { reservation } = this.props
    return (
      <>
        <div className="main">
          <div className="main__content">
            <h1>이제 여행은 가까운 우리나라 안에서</h1>
            <div className="main__scarcity">
              <span>예약하기 전에 코로나19 관련 여행 제한 사항을 확인하세요.</span>
            </div>
            <List reservation={reservation}></List>
          </div>
        </div>
      </>
    )
  }
}

export default ResultList;
