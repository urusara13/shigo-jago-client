import React, { Component } from 'react';
import './Search.css';
import { Link, withRouter } from "react-router-dom";
import sigungu from './sigunguData/sigungu'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areacode: null,
            sigungucode: null,
            checkIn: "",
            checkOut: "",
            adult: 0,
            child: 0,

        };

        this.searchInputValue = this.searchInputValue.bind(this);
        this.sigunguSelect = this.sigunguSelect.bind(this);
    }
    searchInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };
    
    sigunguSelect(areacode) {
        const si = sigungu.filter(ele => ele.si.value === Number(areacode))
        
        return si[0].gungu.map((ele, idx) => (
             <option value={ele.value} key={idx}>{ele.name}</option> )) 
    }

    goSearch = () => {
        const { setReservation } = this.props
        if(this.state.adult + this.state.child > 0) {
            setReservation(this.state)
        }
        else {
            alert('인원을 지정해주세요.')
        }
    }
    

    render() {
        const { areacode } = this.state
        
        return (
            <div className="section">
                <div className="search__box">
                    <div className="search__title">
                        코로나 시국에도 편안하고<br />안전한 숙소를 예약하세요.
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="search__sub__title">시</td>
                                    <td className="search__sub__title">구</td>
                                </tr>
                                <tr>
                                    <td>
                                      <select className="search__input" name="areacode" onChange={this.searchInputValue("areacode")} >
                                        <option value=''>어디로갈까요?</option>
                                        { sigungu.map((ele, idx) => (
                                            <option value={ele.si.value} key={idx}>{ele.si.name}</option> ))}
                                      </select>
                                    </td>
                                    <td>
                                    <select className="search__input" name="sigungucode" onChange={this.searchInputValue("sigungucode")} >
                                        <option value=''>골라골라~</option>
                                        { areacode && this.sigunguSelect(areacode) }
                                    </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="search__sub__title">체크인</td>
                                    <td className="search__sub__title">체크아웃</td>
                                </tr>
                                <tr>
                                    <td><input className="search__input" type="date"
                                        name="date" onChange={this.searchInputValue("checkIn")} /></td>
                                    <td><input className="search__input" type="date"
                                        name="date" onChange={this.searchInputValue("checkOut")} /></td>
                                </tr>
                                <tr>
                                    <td className="search__sub__title">성인</td>
                                    <td className="search__sub__title">아동</td>
                                </tr>
                                <tr>
                                    <td>
                                        <select className="search__input" type='number'
                                            name="성인" onChange={this.searchInputValue("adult")}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className="search__input" type='number'
                                            name="아동" onChange={this.searchInputValue("child")}>
                                            <option>0</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>


                        <div className="search__button" onClick={this.goSearch}>
                           <button>검색</button>
                        </div>   
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Search)
