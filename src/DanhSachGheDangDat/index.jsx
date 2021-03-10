import React, { Component } from "react";
import "./style.css";
class DanhSachGheDangDat extends Component {
  renderBookSeats = () => {
    return this.props.bookedSeats.map((seat) => {
      return (
        <p key={seat.SoGhe}>
          Ghế : {seat.TenGhe} ${seat.Gia}
          <span className="btn py-0 border-0 text-danger"> [Hủy]</span>
        </p>
      );
    });
  };
  render() {
    return (
      <div>
        <h4 className="header-right text-left">
          Danh sách ghế đã đặt ({this.props.bookedSeats.length})
        </h4>
        {this.renderBookSeats()}
      </div>
    );
  }
}

export default DanhSachGheDangDat;
