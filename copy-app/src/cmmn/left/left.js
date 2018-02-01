import React, { Component } from 'react';
import './left.css';

function Left(){
  return (
    <div className="sidebar">
      <div className="sidebar-dropdown">
        <a href="#">메뉴</a>
      </div>
      <div className="sidebar-inner">
        <ul className="navi">
          <li className="npink current leftBtn" id="imhome">
            <a href="#" onclick="javascript:dontSaveOrderConfirm('imhome', 'm')"> 
              <i className="fa fa-desktop"></i> 아임 홈
            </a>
          </li>
          <li className="npink leftBtn" id="dongwonMain">
            <a href="#" onclick="javascript:dontSaveOrderConfirm('dongwon', 'd')"> 
              <i className="fa fa-desktop"></i> 동원 F&#38;B
            </a>
          </li>
          <li className="npink leftBtn" id="costcoMain">
            <a href="#"	onclick="javascript:dontSaveOrderConfirm('costco', 'c')"> 
              <i className="fa fa-desktop"></i> 코스트코
            </a>
          </li>
          <li className="npink leftBtn" id="wellMain">
            <a href="#" onclick="javascript:dontSaveOrderConfirm('well', 'w')"> 
              <i className="fa fa-desktop"></i> 웰푸드
            </a>
          </li>
          <li className="npink leftBtn" id="internetMain">
            <a href="#" onclick="javascript:leftBtnClick('internet', 'i')"> 
              <i className="fa fa-desktop"></i> 인터넷주문
            </a> 
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Left;