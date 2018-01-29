import React, { Component } from "react";
import "./Main.css";
import "../bootstrap.min.css";

class Main extends Component {
  render() {
    const { title } = this.props;
    return (
        <div class="mainbar">
            <div class="page-head">
                <h2 id="pageTitle" class="pull-left">
                    IMHOME
                </h2>
                <div class="clearfix"></div>
            </div>
            <div class="matter">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6"> 
                            <div id="pMenu" class="padd">
                                    
                                    <div class="pRowMenu">
                                            <div id="" class="pButton seleted open">
                                                <b></b>
                                                <span class="menuRight"><i class="fa fa-chevron-down fa-2x"></i></span>
                                                <span class="menuSubTitle">survived not only five centuries but the leap</span>
                                            </div>
                                            <div id="" class="pButton">
                                                <b></b>
                                                <span class="menuRight"><i class="fa fa-chevron-down fa-2x"></i></span>
                                                <span class="menuSubTitle">survived not only five centuries but the leap</span>
                                            </div>
                                        
                                        <table class="pTable">
                                            <colgroup>
                                                <col width="*"/>
                                                <col width="15%"/>
                                                <col width="15%"/>
                                                <col width="20%"/>
                                                <col width="15%"/>
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
                                                        <tr class="List_${mainMenu.fCode}">
                                                            <td id="${mainMenu.fCode}_Name">
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td id="${mainMenu.fCode}_Cost">
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td class="pMount">
                                                                <div class="upDownDiv">
                                                                    <span class="upDownBtn" onclick="javascript:mountClick('down', '${mainMenu.fCode}');">-</span>
                                                                    <input class="${mainMenu.fCode}_OrderNum" type="number" placeholder="0" max="${fRestMount}" onkeyup="javascript:pressNumber('${mainMenu.fCode}', '${mainMenu.fRestMount}')"/>
                                                                    <span class="upDownBtn" onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');">+</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                            </tbody>			
                                        </table>
                                    </div>
                            </div>
                        </div>
                        
                        <div class="col-sm-12 col-md-6 ">
                            <div class="orderContainer">
                                <div class="order">
                                    <div class="orderHead">
                                        <div class="orderTitle">Your Order</div>
                                        <div class="orderProduct">
                                        product
                                        </div>
                                        <div class="orderPrice">
                                        total
                                        </div>
                                    </div>
                                    <div class="productList">
                                        <ul id="orderChart">
                                            
                                        </ul>
                                    </div>
                                    <div class="orderTotal">
                                        <div class="orderProduct">
                                        ORDER TOTAL
                                        </div>
                                        <div id="totalPrice" class="orderPrice">
                                        0
                                        </div>
                                    </div>
                                    <div class="orderFooter">
                                        <div class="col-sm-6 col-md-6">
                                            <button class="orderBtn" onclick="javascript:saveOrderList()">주문 저장</button>
                                        </div>
                                        <div class="col-sm-6 col-md-6">
                                            <button class="orderBtn" onclick="javascript:saveOrderList()">주문 하기</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-12">
                            <button class="popUp__trigger">전체 메뉴 보기</button>
                        </div> 
                        

                        <div class="popUp">
                        <span class="popUp__close">&#x2715;</span>
                        <h2 class="popUp__title">
                            Food Menu
                        </h2>
                        <div class="popUp__content">
                            <table class="popUp__table">
                                <colgroup>
                                    <col width="*"/>
                                    <col width="15%"/>
                                    <col width="15%"/>
                                    <col width="20%"/>
                                    <col width="20%"/>
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
                                                <tr class="List_${mainMenu.fCode}">
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td class="pMount">
                                                        <div class="upDownDiv">
                                                            <span class="upDownBtn" onclick="javascript:mountClick('down', '${mainMenu.fCode}');">-</span>
                                                            <input class="${mainMenu.fCode}_OrderNum" type="number" placeholder="0" max="${fRestMount}" onkeyup="javascript:pressNumber2(this,'${mainMenu.fCode}', '${mainMenu.fRestMount}')"/>
                                                            <span class="upDownBtn" onclick="javascript:mountClick('up','${mainMenu.fCode}', '${mainMenu.fRestMount}');">+</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                </tbody>			
                            </table>
                        </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Main;
