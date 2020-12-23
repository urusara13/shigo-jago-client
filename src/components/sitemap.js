import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sitemap extends Component {
    render() {
        return (

            <div class="sitemap">
                <div class="map__box">
                    <li><Link to="/">소개</Link></li>
                    <li><Link to="/">만든이</Link></li>
                    <li><Link to="/">문의</Link></li>
                    <li><Link to="/">도움말</Link></li>
                </div>
                <div class="menu">
                    <ul>
                        <li><Link to="/mypage/reserveinfo">예약내역</Link></li>
                        <li><Link to="/mypage/userinfo">마이페이지</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sitemap