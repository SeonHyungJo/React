import React, { Component } from "react";
import "../App.css";

class Nav extends Component {
  render() {
    return (
      <div class="sidebar">
        <div class="sidebar-dropdown">
          <a href="#">메뉴</a>
        </div>

        <div class="sidebar-inner">
          <ul class="navi">
            <li class="npink current leftBtn" id="imhome">
              <a
                href="#"
                onclick="javascript:dontSaveOrderConfirm('imhome', 'm')"
              >
                <i class="fa fa-desktop" /> 아임 홈
              </a>
            </li>
            <li class="npink leftBtn" id="dongwonMain">
              <a
                href="#"
                onclick="javascript:dontSaveOrderConfirm('dongwon', 'd')"
              >
                <i class="fa fa-desktop" /> 동원 F&#38;B
              </a>
            </li>

            <li class="npink leftBtn" id="costcoMain">
              <a
                href="#"
                onclick="javascript:dontSaveOrderConfirm('costco', 'c')"
              >
                <i class="fa fa-desktop" /> 코스트코
              </a>
            </li>

            <li class="npink leftBtn" id="wellMain">
              <a
                href="#"
                onclick="javascript:dontSaveOrderConfirm('well', 'w')"
              >
                <i class="fa fa-desktop" /> 웰푸드
              </a>
            </li>

            <li class="npink leftBtn" id="internetMain">
              <a href="#" onclick="javascript:leftBtnClick('internet', 'i')">
                <i class="fa fa-desktop" /> 인터넷주문
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
