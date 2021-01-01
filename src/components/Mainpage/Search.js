import React, { Component } from 'react';
import './Search.css';
import { withRouter } from "react-router-dom";
import sigungu from './sigunguData/sigungu'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areacode: null || 1,
            sigungucode: null || 1,
            checkIn: null,
            checkOut: null,
            adult: 0,
            child: 0,

        };

        this.searchInputValue = this.searchInputValue.bind(this);
        this.searchInDateValue = this.searchInDateValue.bind(this);
        this.searchOutDateValue = this.searchOutDateValue.bind(this);
        this.sigunguSelect = this.sigunguSelect.bind(this);
    }
    searchInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    searchInDateValue = (e) => {
        const { checkOut } = this.state;
        const strDate = e.target.value;

        const year = strDate.substr(0, 4);
        const month = strDate.substr(5, 2);
        const date = strDate.substr(8, 10);

        const inDate = new Date(Number(year), Number(month) - 1, Number(date));
        const today = new Date();

        if (inDate - today < -86400000) {
            alert('오늘 이후의 날짜로 선택해주세요.')
        } else if (checkOut) {
            const oyear = checkOut.substr(0, 4);
            const omonth = checkOut.substr(5, 2);
            const odate = checkOut.substr(8, 10);

            const outDate = new Date(Number(oyear), Number(omonth) - 1, Number(odate));

            if (inDate - outDate >= 0) {
                alert('체크아웃 시간보다 앞 시간을 선택해주세요.')
            } else {
                this.setState({ checkIn: strDate });
            }
        } else {
            this.setState({ checkIn: strDate });
        }

    };

    searchOutDateValue = (e) => {
        const { checkIn } = this.state;
        const strDate = e.target.value;

        const year = strDate.substr(0, 4);
        const month = strDate.substr(5, 2);
        const date = strDate.substr(8, 10);

        const outDate = new Date(Number(year), Number(month) - 1, Number(date));
        const today = new Date();

        if (outDate - today < -86400000) {
            alert('오늘 이후의 날짜로 선택해주세요.')
        } else if (checkIn) {
            const iyear = checkIn.substr(0, 4);
            const imonth = checkIn.substr(5, 2);
            const idate = checkIn.substr(8, 10);

            const inDate = new Date(Number(iyear), Number(imonth) - 1, Number(idate));

            if (outDate - inDate <= 0) {
                alert('체크인 시간보다 뒷 시간을 선택해주세요.')
            } else {
                this.setState({ checkOut: strDate });
            }
        } else {
            this.setState({ checkOut: strDate });
        }

    };

    sigunguSelect(areacode) {
        const si = sigungu.filter(ele => ele.si.value === Number(areacode))

        return si[0].gungu.map((ele, idx) => (
            <option value={ele.value} key={idx}>{ele.name}</option>))
    }

    goSearch = () => {
        const { setReservation } = this.props
        const { adult, child, checkIn, checkOut } = this.state

        if (!(checkIn || checkOut)) {
            alert('날짜를 바르게 지정해주세요.')
        }
        else if (adult + child > 0) {
            setReservation(this.state)
        }
        else {
            alert('인원을 지정해주세요.')
        }
    }


    render() {
        const { areacode } = this.state

        return (
            <>
                <div className="search__box">

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="where_area">
                            <div className="fat_text">시</div>
                            <select className="search__input" name="areacode" onChange={this.searchInputValue("areacode")} >
                                <option value=''>쉬고</option>
                                {sigungu.map((ele, idx) => (
                                    <option value={ele.si.value} key={idx}>{ele.si.name}</option>))}
                            </select>
                        </div>
                        <div className="where_sigungu">
                            <div className="fat_text">구</div>
                            <select className="search__input" name="sigungucode" onChange={this.searchInputValue("sigungucode")} >
                                <option value=''>자고</option>
                                {areacode && this.sigunguSelect(areacode)}
                            </select>
                        </div>
                        <div className="check_in_div">
                            <div className="fat_text">체크인</div>
                            <input className="search__date" type="date"
                                name="date" onChange={this.searchInDateValue} />
                        </div>
                        <div className="check_out_div">
                            <div className="fat_text">체크아웃</div>
                            <input className="search__date" type="date"
                                name="date" onChange={this.searchOutDateValue} />
                        </div>
                        <div className="adult_div">
                            <div className="fat_text">성인</div>
                            <select className="search__input" type='number'
                                name="성인" onChange={this.searchInputValue("adult")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="child_div">
                            <div className="fat_text">아동</div>
                            <select className="search__input" type='number'
                                name="아동" onChange={this.searchInputValue("child")}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div className="search__button" onClick={this.goSearch}>
                            <button>검색</button>
                        </div>
                    </form >
                </div >
                <div className="search__title">
                    코로나 시국에도 편안하고<br />안전한 숙소를 예약하세요.
                </div>
            </>

        )
    }
}

export default withRouter(Search)
