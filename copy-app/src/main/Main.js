import React, { Component } from "react";
import "./main.css";
import '../bootstrap.min.css';
import MenuList from './menuList/menuList';

export default class Main extends Component {
  render() {
    return (
      <div className="mainbar">
        <div className="page-head col-sm-12 col-md-12">
          <h2 id="pageTitle" className="pull-left">
            IMHOME
          </h2>
        </div>
        <div className="container col-sm-12 col-md-6">
          <div id="pMenu">
            <div className="pRowMenu">
              <MenuList/>
              <MenuList/>
              <MenuList/>
              <MenuList/>
              <MenuList/>
              <MenuList/>
            </div>
          </div>
        </div>

        <div className="container col-sm-12 col-md-6">
          <div className="orderContainer">
            <div className="order">
              <div className="orderHead">
                <div className="orderTitle">Your Order</div>
                <div className="orderProduct">product</div>
                <div className="orderPrice">total</div>
              </div>
              <div className="productList">
                <ul id="orderChart" />
              </div>
              <div className="orderTotal">
                <div className="orderProduct">ORDER TOTAL</div>
                <div id="totalPrice" className="orderPrice">
                  0
                </div>
              </div>
              <div className="orderFooter">
                <div className="col-sm-6 col-md-6">
                  <button
                    className="orderBtn"
                    onclick="javascript:saveOrderList()"
                  >
                    주문 저장
                  </button>
                </div>
                <div className="col-sm-6 col-md-6">
                  <button
                    className="orderBtn"
                    onclick="javascript:saveOrderList()"
                  >
                    주문 하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="popUp__trigger">전체 메뉴 보기</button>

        <div className="popUp">
          <span className="popUp__close">&#x2715;</span>
          <h2 className="popUp__title">Food Menu</h2>
          <div className="popUp__content">
            <table className="popUp__table">
              <colgroup>
                <col width="*" />
                <col width="15%" />
                <col width="15%" />
                <col width="20%" />
                <col width="20%" />
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
              <tbody id="popUpTbody">
                <tr className="List_${mainMenu.fCode}">
                  <td />
                  <td />
                  <td />
                  <td />
                  <td className="pMount">
                    <div className="upDownDiv">
                      <span
                        className="upDownBtn"
                        onclick="javascript:mountClick('down', '${mainMenu.fCode}');"
                      >
                        -
                      </span>
                      <input
                        className="${mainMenu.fCode}_OrderNum"
                        type="number"
                        placeholder="0"
                        max="${fRestMount}"
                        onkeyup="javascript:pressNumber2(this,'${mainMenu.fCode}', '${mainMenu.fRestMount}')"
                      />
                      <span
                        className="upDownBtn"
                        onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');"
                      >
                        +
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
