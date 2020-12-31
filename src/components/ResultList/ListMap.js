import React, { Component } from "react"
let lastScrollY = 0
let ticking = false

export default class ListMap extends React.Component {
  
  
  constructor(props) {
    super(props)
      this.state = {

      }
      this.handleScroll = this.handleScroll.bind(this)
    }

  handleScroll() {
    
    const { list } = this.props
    lastScrollY = window.scrollY
    console.log(lastScrollY)
   
    const ele = document.querySelectorAll('.listings__item')
    const level = document.querySelectorAll('.listings__item')[ele.length - 1].getBoundingClientRect().top
    
      // if(lastScrollY < list.length * 110 ) {
        const map = document.querySelector('#map')
        const pre = Number(map.style.top.split('px')[0])
        console.log('pre', pre)
        map.style.top = `${lastScrollY}px`
        console.log('map', map.style.top)
        
      
  
      
  
      
    //   console.log('변경후', map.style.bottom)
      // ticking = false
    
      // ticking = true
  }

  componentDidMount() {
    const { list } = this.props
    window.addEventListener('scroll', this.handleScroll);

    let positions = []
    let mapx = 0, mapy = 0

    list.forEach(obj => {
      console.log(obj)
      const newObj = Object.assign({}, {
        latlng: new window.kakao.maps.LatLng(Number(obj.mapy), Number(obj.mapx)),
        title: obj.title,
        content: `<div style="box-shadow: rgba(0, 0, 0, 0.6) 0px 15px 40px !important"><img src=${obj.image1} width="300" height="200" /><br><br><div style="text-align: center">${obj.title}</div><br><hr /><br><div style="text-align: center; top: 10px;">가격 : <span style="font-weight: 800 !important">${obj.price}</span></div><br></div>`
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

    let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
    
for (var i = 0; i < positions.length; i ++) {
    
    // 마커 이미지의 이미지 크기 입니다
    let imageSize = new window.kakao.maps.Size(24, 35); 
    
    // 마커 이미지를 생성합니다    
    let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize); 
    
    // 마커를 생성합니다
    let marker = new window.kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image : markerImage // 마커 이미지 
    });
    let infowindow = new window.kakao.maps.InfoWindow({
      content: positions[i].content // 인포윈도우에 표시할 내용 
     })

     window.kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow))
     window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow))
  }
  const kakao = document.querySelector('#map')
  if(kakao) {
    kakao.style.top = `100px`
  }
  function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker)
    }
  }

  function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    }
  }
}

  render () {
    return (
      <>
        <div id="map" onScroll={this.handleScroll} style={{"width":"1200px", "height":"800px"}} ></div>
      </>
    )
  }
}