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
		const listItems = topMenu.map((number) =>
			<li>{number}</li>
		);
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
					{topMenu.map((menu) => this.state.topMenuClicked === menu ? (<TopList />) : null )}
				</ul>
			</nav>
			</div>
		</div>
		);
  	}
}

export default Top;
