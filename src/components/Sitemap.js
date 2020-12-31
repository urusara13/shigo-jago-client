import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sitemap.css';

class Sitemap extends Component {
    render() {
        return (
            <div className="section">
                <div className="sitemap">
                    <div className="map__menu1">
                        <ul>
                            <li><Link to="/about">소개</Link></li>
                            <li><Link to="/gethelp">문의</Link></li>
                            <li><Link to="/hire">채용정보</Link></li>
                            <li><Link to="/refund">이용약관 및 개인정보방침</Link></li>
                        </ul>
                    </div>
                    <div className="map__menu2">
                        <ul>
                            <li><Link to="/mypage/reserveinfo">예약내역</Link></li>
                            <li><Link to="/mypage/userinfo">마이페이지</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}

export default Sitemap