// Code DelayedButton Component Here
import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  render() {
    return (
      <button
        onClick={(e) => {
          //   console.log(e);
          //   let myVar = setTimeout(this.props.onDelayedClick(e), 1000000000000);
          setTimeout(() => {
            this.props.onDelayedClick(e);
          }, this.props.delay);
        }}
      >
        Event
      </button>
    );
  }
}
