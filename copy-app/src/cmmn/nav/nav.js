import React, { Component } from "react";
import "./nav.css";
// import '../../bootstrap.min.css';
import "../../App.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <a href="#">
          <span className="headerTitle">I'm Home</span>
					<span className="headerbranch">분당점</span>
        </a>
      </div>

      <nav className="nav">
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#">주문재고관리</a>
          </li>
          <li>
            <a href="#">주문내역확인</a>
          </li>
          <li>
            <a href="#">주문내역조회</a>
          </li>
          <li>
            <a href="#">로그아웃</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
