import React, { Component } from "react";
import "./Top.css";
import "../App.css";
import TopList from "./TopList";

class Top extends Component {

	state = {
		topMenuClicked: "주문재고관리"
	}

	_click = (clickMenu) => {
		this.setState({
			topMenuClicked: clickMenu
		});
		console.log();
	}

	_makeTopList = () =>{
		return (
			<TopList />
		)
	}

  	render() {
		const topMenu = this.props
		console.log(topMenu);
		return (
		<div className="navbar navbar-inverse navbar-fixed-top bs-docs-nav">
			<div className="container">
			<div className="navbar-header">
				<a
				href="#"
				className="navbar-brand"
				onclick="javascript:move.pageSubmitFn('main')"
				>
				I'm
				<span className="bold"> Home</span>
				</a>
			</div>

			<nav
				className="collapse navbar-collapse bs-navbar-collapse"
				role="navigation"
			>
				<ul className="nav navbar-nav navbar-right">
				{topMenu.map((menu) => this.state.topMenuClicked === menu ? (this._makeTopList) : null )}
				// <li className="active">
				// 	<a href="#" onClick={this._click("m")}>{topMenu[0]}</a>
				// </li>
				// <li>
				// 	<a href="#" onClick={this._click}>{topMenu[1]}</a>
				// </li>
				// <li>
				// 	<a href="#" onClick={this._click}>{topMenu[2]}</a>
				// </li>
				// <li>
				// 	<a href="#" onClick={this._click}>{topMenu[3]}</a>
				// </li>
				</ul>
			</nav>
			</div>
		</div>
		);
  	}
}

export default Top;
