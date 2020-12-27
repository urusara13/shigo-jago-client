import React, { Component } from 'react';
import './Search.css';
import { withRouter, Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import ResultList from '../ResultList/ResultList';

class Search extends Component {
    render() {
        return (
            <Router>
            <div className="section">
            <div className="search__box">
                <div className="search__title">
                    특색 있는 숙소와 즐길<br /> 거리를 예약하세요.
                </div>
                <table>
                <tbody>
                    <tr>
                        <td colSpan="2" className="search__sub__title">목적지</td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input className="search__input" type="text" placeholder="  모든 위치" />
                        </td>
                    </tr>
                    <tr>
                        <td className="search__sub__title">체크인</td>
                        <td className="search__sub__title">체크아웃</td>
                    </tr>
                    <tr>
                        <td><input className="search__input" type="date" /></td>
                        <td><input className="search__input" type="date" /></td>
                    </tr>
                    <tr>
                        <td className="search__sub__title">성인</td>
                        <td className="search__sub__title">아동</td>
                    </tr>
                    <tr>
                        <td>
                            <select className="search__input">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </td>
                        <td>
                            <select className="search__input">
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
                <div className="search__button">
                    <Link to='/resultList'>검색</Link>
                </div>
            </div>
            <Switch>
              <Route exact path="/resultList" >
                <ResultList/>
              </Route>
            </Switch>
            </div>
            </Router>
        )
    }
}

export default withRouter(Search)