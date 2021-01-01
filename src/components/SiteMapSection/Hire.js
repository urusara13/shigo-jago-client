import React, { Component } from 'react';
import './Hire.css';

class Hire extends Component {
    render() {
        return (
            <div className="hr_main">
                <div id="hr_header" className="hr_header">
                    <h1>SHIGO JAGO Careers</h1>
                    <div className="gnb_wrap">
                        <nav id="gnb" className="gnb">
                            <ul className="dep1">
                                <li>People</li>
                                <li>Culture</li>
                                <li>Jobs</li>
                                <li>FAQs</li>
                            </ul>
                        </nav>
                        <div className="language_list"><button id="header-languages" type="button" className="btn">KR</button>
                            <div className="list">
                                <ul>
                                    <li><a href="#" className="active">KR</a></li>
                                    <li><a href="#" className="">EN</a></li>
                                </ul>
                            </div>
                        </div>
                    </div><button type="button" className="btn_header_search"><span className="blind">Search</span></button>


                </div>
                <div>
                    <div className="main_top">
                            <div className="text_area">
                                <p className="text"><span>One step closer</span><span>to a better future</span></p>
                                <div className="select_option">
                                    <div className="combo_box combo_location"><button id="location-dropdown" type="button" className="btn_combo_box">Location</button>
                                        <ul className="combo_list">
                                            <li><button type="button">Korea</button></li>
                                            <li><button type="button">China</button></li>
                                            <li><button type="button">Hong Kong</button></li>
                                            <li><button type="button">Indonesia</button></li>
                                            <li><button type="button">Japan</button></li>
                                            <li><button type="button">Taiwan</button></li>
                                            <li><button type="button">Thailand</button></li>
                                            <li><button type="button">USA</button></li>
                                        </ul><select className="main_select">
                                            <option value="Location">Location</option>
                                            <option value="Korea">Korea</option>
                                            <option value="China">China</option>
                                            <option value="Hong Kong">Hong Kong</option>
                                            <option value="Indonesia">Indonesia</option>
                                            <option value="Japan">Japan</option>
                                            <option value="Taiwan">Taiwan</option>
                                            <option value="Thailand">Thailand</option>
                                            <option value="USA">USA</option>
                                        </select>
                                    </div>
                                    <div className="combo_box combo_category"><button id="category-dropdown" type="button" class="btn_combo_box">Job Unit</button>
                                        <ul className="combo_list">
                                            <li><button type="button">Engineering</button></li>
                                            <li><button type="button">Design</button></li>
                                            <li><button type="button">Product Planning</button></li>
                                            <li><button type="button">Business</button></li>
                                            <li><button type="button">Management Support</button></li>
                                        </ul><select className="main_select">
                                            <option value="Job Unit">Job Unit</option>
                                            <option value="Engineering">Engineering</option>
                                            <option value="Design">Design</option>
                                            <option value="Product Planning">Product Planning</option>
                                            <option value="Business">Business</option>
                                            <option value="Management Support">Management Support</option>
                                        </select>
                                    </div>
                                </div><a className="btn_go disabled" hreflang="ko" href="/ko ">Search</a>
                            </div>
                            <div className="desc_scroll">Scroll</div>
                        </div>
                    </div>


                </div>
        )
    
    }
}

export default Hire