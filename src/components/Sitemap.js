import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Sitemap extends Component {
    render() {
        return (
            <div className="section">
                <div className="sitemap">
                    <div className="map__menu1">
                        <ul>
                            <li><Link to="/">소개</Link></li>
                            <li><Link to="/">만든이</Link></li>
                            <li><Link to="/">문의</Link></li>
                            <li><Link to="/">도움말</Link></li>
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