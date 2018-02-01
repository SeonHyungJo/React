import React, { Component } from "react";
import "./menuList.css";

export default class MainList extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  }

  componentDidMount() {
  }

  // 간단한 토글 구현
  _slideToggle = (e) => {
    {this.state.isToggleOn ? e.currentTarget.nextSibling.style.display = "none" : e.currentTarget.nextSibling.style.display = ""}
    this.setState({
      isToggleOn : !this.state.isToggleOn
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="pRowMenu">
        <div id="" className="pButton seleted open" onClick={this._slideToggle}>
          asdfasdf
          <span className="menuRight">
            <i className="fa fa-chevron-down fa-2x" />
          </span>
          <span className="menuSubTitle">
            survived not only five centuries but the leap
          </span>
        </div>

        <table className="pTable">
          <colgroup>
            <col width="*" />
            <col width="15%" />
            <col width="15%" />
            <col width="20%" />
            <col width="15%" />
          </colgroup>
          <thead>
            <tr>
              <th>품목</th>
              <th>단위</th>
              <th>가격</th>
              <th>재고량</th>
              <th>주문</th>
            </tr>
          </thead>
          <tbody>
            <tr className="List_${mainMenu.fCode}">
              <td id="${mainMenu.fCode}_Name" />
              <td />
              <td id="${mainMenu.fCode}_Cost" />
              <td />
              <td className="pMount">
                <div className="upDownDiv">
                  <span
                    className="upDownBtn"
                    onClick="javascript:mountClick('down', '${mainMenu.fCode}');"
                  >
                    -
                  </span>
                  <input
                    className="${mainMenu.fCode}_OrderNum"
                    type="number"
                    placeholder="0"
                    max="${fRestMount}"
                    onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                  />
                  <span
                    className="upDownBtn"
                    onClick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                  >
                    +
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
