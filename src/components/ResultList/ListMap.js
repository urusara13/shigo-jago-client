import React, { Component } from "react"
import './listMap.css'
import { purpleMarker } from '../../images/resources'

let lastScrollY = 200

export default class ListMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    const { list } = this.props
    lastScrollY = window.scrollY < 200 ? 200 : window.scrollY
  
    const ele = document.querySelectorAll('.listings__item')

    const map = document.querySelector('#map')
    const pre = Number(map.style.top.split('px')[0])

    map.style.top = `${lastScrollY}px`
  }
  
  componentDidMount() {
    const { list } = this.props
    window.addEventListener('scroll', this.handleScroll)

    let positions = []
    let mapx = 0, mapy = 0

    list.forEach(obj => {
      const newObj = Object.assign({}, {
        latlng: new window.kakao.maps.LatLng(Number(obj.mapy), Number(obj.mapx)),
        title: obj.title.replace(/\[[^\]]*\]/g,"").replace(/ *\([^)]*\) */g, ""),
        content: `<div style="box-shadow: rgba(5, 10, 30, 0.6) 10px 15px 20px !important; border-radius: 5px; background: white;  margin: auto;
       "><img src=${obj.firstimage || obj.image1} width="300" height="200" /><br><div style="text-align: center; font-weight:lighter;">${obj.addr1.split(' ').slice(0,3).join(' ')}</div><div style="text-align: center; font-weight:bold; ">${obj.title.replace(/\[[^\]]*\]/g,"").replace(/ *\([^)]*\) */g, "")}</div>
        <hr /><br><div style="text-align: center; top: 10px;">가격 : <span style="font-weight: 800 !important">${obj.price}</span></div><br></div>`
      })
      mapx += Number(obj.mapx)
      mapy += Number(obj.mapy)
      positions.push(newObj)
    })

    let mapContainer = document.getElementById('map'), 
        mapOption = { 
        center: new window.kakao.maps.LatLng(mapy / list.length, mapx / list.length), 
        level: 9
        };

    let map = new window.kakao.maps.Map(mapContainer, mapOption);
    const kakao = document.querySelector('#map')
    if (kakao) {
      kakao.style.top = `200px`
    }

    positions.forEach((ele, idx) => {
      let imageSrc = `${purpleMarker}`, 
      imageSize = new window.kakao.maps.Size(50, 55)

      let markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize),
      markerPosition = ele.latlng 

      let marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage 
      })

      marker.setMap(map)

      let content = '<div class="customoverlay">' +
      '  <div class="markerinfo">' +
      `    <span class="title">${ele.title}</span>` +
      '  </div>' +
      '</div>';

      let customOverlay = new window.kakao.maps.CustomOverlay({
        map: map,
        position: ele.latlng,
        content: content,
        yAnchor: 1 
    });
    console.log(idx, customOverlay)
      let infowindow = new window.kakao.maps.InfoWindow({
        content: ele.content 
      })
      const markerinfo = document.querySelectorAll('.markerinfo')[idx]
      const customoverlay = document.querySelectorAll('.customoverlay')[idx]
      markerinfo.addEventListener('click',  makeOverListener(map, marker, infowindow))
      customoverlay.addEventListener('mouseout',  makeOutListener(infowindow))
      // window.kakao.maps.event.addListener(marker, 'click', makeOutListener(infowindow))
    })
      function makeOverListener(map, marker, infowindow) {
        return function () {
          infowindow.open(map, marker)
      }
    }
     function makeOutListener(infowindow) {
      return function () {
        setTimeout(() => infowindow.close(),4000)
      }
    }
    
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return (
      <>
        <div id="map" onScroll={this.handleScroll} style={{ "width": "1200px", "height": "800px" }} ></div>
      </>
    )
  }
}