import React, { Component } from "react"
let lastScrollY = 0
let ticking = false;
export default class ListMap extends React.Component {
  
  
  constructor(props) {
    super(props)
      this.state = {

      }
      this.handleScroll = this.handleScroll.bind(this)
    }

  handleScroll() {
    lastScrollY = window.scrollY
    // console.log(lastScrollY)
    
      const map = document.querySelector('#map')
      if(lastScrollY < 2500) {
        map.style.bottom = `${3000 - lastScrollY}px`
      }
      
      console.log('변경후', map.style.bottom)
      ticking = false
    
      ticking = true
  }

  componentDidMount() {
    const { list } = this.props
    window.addEventListener('scroll', this.handleScroll, true);

    let positions = []
    let mapx = 0, mapy = 0

    list.forEach(obj => {
      const newObj = Object.assign({}, {
        latlng: new window.kakao.maps.LatLng(Number(obj.mapy), Number(obj.mapx)),
        title: obj.title,
      })
      mapx += Number(obj.mapx)
      mapy += Number(obj.mapy)
      positions.push(newObj)
    })

  
    let container = document.getElementById('map');
    let options = {
      center: new window.kakao.maps.LatLng(mapy/list.length, mapx/list.length),
      level: 6
    }
    let map = new window.kakao.maps.Map(container, options);

    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new window.kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    var marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
  }
  }

  render () {
    return (
      <>
        <div id="map" style={{"width":"1000px", "height":"600px"}} onScroll={this.handleScroll}></div>
      </>
    )
  }
}