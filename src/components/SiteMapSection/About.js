import React, { Component } from 'react';
import './About.css';
import snow from '../../images/snow.jpg'
import find from '../../images/find.jpg'
import house from '../../images/house.jpg'
import search from '../../images/search.jpg'

class About extends Component {
    render() {
        return (
            <>
                <div className="about_main">
                    <div className="about-content">
                        <div className="landing_page_section">
                            <div className="_1gw6tte">
                                <div className="_18zex8c">
                                <img src={snow} className="_1kvgpz1" alt={snow} />
                                    <div className="_v748os9">
                                        <h1 className="_tqukbm">쉬고자고를 만나보세요.</h1>
                                        <div className="_1hd0eby">쉬고자고 커뮤니티에 오신 것을 환영합니다.
                                        여행 좀 해본 분들이 찾고 또 찾는 예약사이트.
                                        쉬고자고에서 나만의 멋진 숙소를 찾아보세요!
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                        <div className="landing_page_section">
                            <div className="_1gw6tte">
                                <div className="_vmvmolb">
                                    <div className="_19h11reb">
                                        <div className="_1gae5lh">
                                            <div className="_62ifho">
                                                <img className="_1qm0zaj" src={find} alt='find'></img>
                                                <h2 className="_1qikkmp">여행에 적합한 숙소</h2>
                                                <p className="_uz7gpd">찾으시는 숙소가 주말 여행을 위한 펜션이든 온 가족이 편히 머물 수 있는 공간이든, 호스트님의 따뜻한 환대는 여행의 즐거움을 더해줍니다. 쉬고자고의 모든 숙소에는 체크인 및 편안한 숙박을 위해 필요한 정보를 알려줄 수 있는 호스트가 있다는 사실을 기억하세요.</p></div>
                                            <div className="_62ifho">
                                                <img className="_1qm0zaj" src="https://modo-phinf.pstatic.net/20180107_246/1515305308461CDEdi_PNG/mosa5ErRLp.png?type=f353_353" alt=""></img>
                                                <h2 className="_1qikkmp">독특한 체험</h2>
                                                <p className="_uz7gpd">쉬고자고 체험은 흔하디 흔한 투어 상품이 아닙니다. 여행 중이든, 내 도시를 둘러보는 중이든, 집에 머물고 있든, 전문가로부터 새로운 것을 배워보세요. 댄스 레슨, 파스타 만들기, 심지어 염소와 함께하는 요가를 배우실 수 있습니다.</p></div>
                                            <div className="_62ifho">
                                                <img className="_1qm0zaj" src={house} alt=""></img>
                                                <h2 className="_1qikkmp">합리적인 선택</h2>
                                                <p className="_uz7gpd">쉬고자고에서 여러 숙박업체를 한눈에 비교할 수 있습니다. 각종 프로모션 진행으로 같은 장소를 다른 사이트들보다 저렴하게 예약할 수 있습니다. 다른사람의 후기를 확인하여 숙소 예약에 필요한 정보를 얻을 수 있습니다.</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-veloute="landing_page_section">
                            <div className="_1gw6tte">
                                <div className="_vmvmolb" >
                                    <div className="_19h11reb">
                                        <h2 className="_x2xwu5">간단한 시작 방법</h2>
                                        <div className="_1byskwn">
                                            <div className="_1waicp6g">
                                                <div className="_y7pled">
                                                    <img className="_audx11w" src="https://img.freepik.com/free-photo/woman-browsing-smartphone-near-window_23-2147769534.jpg?size=626&ext=jpg" alt=""></img>
                                                    <h3 className="_a43cb3">검색 필터를 적용하여 원하는 결과 찾기</h3>
                                                    <div className="_4gelgl">원하는 조건에 맞는 결과를 찾을 수 있도록 가격대나 수영장 같은 필터를 적용하여 검색을 맞춤설정하세요.</div>
                                                </div>
                                            </div>
                                            <div className="_1waicp6g">
                                                <div className="_y7pled">
                                                    <img className="_audx11w" src={search} alt=""></img>
                                                    <h3 className="_a43cb3">자세히 알아보기</h3>
                                                    <div className="_4gelgl">사진을 확인해보세요. 그런 다음 이전 게스트의 후기를 통해 예약이 어떠할지 가늠해보세요.</div>
                                                </div>
                                            </div>
                                            <div className="_1waicp6g">
                                                <div className="_y7pled">
                                                    <img className="_audx11w" src="https://image.freepik.com/free-photo/woman-sat-with-a-laptop-and-paid-with-a-credit-card-in-a-cafe_1150-18755.jpg" alt=""></img>
                                                    <h3 className="_a43cb3">안심하고 예약하세요.</h3>
                                                    <div className="_4gelgl">안전한 결제 처리를 위해 에어비앤비는 개인정보를 철저히 보호하고 글로벌 보안 기준을 준수합니다.</div>
                                                </div>
                                            </div>
                                            <div className="_1waicp6g">
                                                <div className="_y7pled">
                                                    <img className="_audx11w" src="https://travelblog.expedia.co.kr/wp-content/uploads/2019/11/photo-1455833989507-53854bb2ba0f-1.jpg" alt=""></img>
                                                    <h3 className="_a43cb3">도착 후 여행을 즐겨보세요!</h3>
                                                    <div className="_4gelgl">궁금한 사항이 있는 경우 호스트에게 메시지를 보내 물어보세요. 유용한 현지 팁과 조언을 얻으실 수 있습니다.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )


    }
}

export default About