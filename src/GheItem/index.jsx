import React, { Component } from "react";
import classNames from "classnames";

class GheItem extends Component {
  state = {
    isBooking: false,
  };

  handleToggle = () => {
    this.setState({
      isBooking: !this.state.isBooking,
    });
  };

  addToBookSeats = () => {
    this.props.addToBookSeats(this.props.data);
    this.handleToggle();
  };

  removeFromBookSeats = () => {
    this.props.removeFromBookSeats(this.props.data);
    this.handleToggle();
  };

  render() {
    return (
      <button
        onClick={
          this.state.isBooking ? this.removeFromBookSeats : this.addToBookSeats
        }
        disabled={this.props.data.TrangThai}
        className={classNames("btn w-75 mb-3", {
          "btn-success": this.state.isBooking && !this.props.data.TrangThai,
          "btn-secondary": !this.state.isBooking && !this.props.data.TrangThai,
          "btn-danger": this.props.data.TrangThai,
        })}
      >
        {this.props.data.SoGhe}
      </button>
    );
  }
}

export default GheItem;
