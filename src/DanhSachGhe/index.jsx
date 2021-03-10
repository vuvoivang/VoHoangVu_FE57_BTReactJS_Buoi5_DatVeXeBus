import React, { Component } from "react";
import GheItem from "../GheItem";
import "./style.css";
class DanhSachGhe extends Component {
  renderSeatList = () => {
    return this.props.data.map((seat) => {
      return (
        <div key={seat.SoGhe} className="col-3">
          <GheItem
            addToBookSeats={this.props.addToBookSeats}
            removeFromBookSeats={this.props.removeFromBookSeats}
            data={seat}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div class="container">
        <div className="row border-right pr-3">
          <h4 className="py-2 w-100 text-center rounded header-left">Tài xế</h4>
          {this.renderSeatList()}
        </div>
      </div>
    );
  }
}

export default DanhSachGhe;
