import React, { Component } from "react";

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      reset: false,
      lap: false,
      pause: false,
    };
  }
  startHandler() {
    this.setState({
      ...this.state,
      start: false,
      pause: true,
      lap: true,
    });
    this.props.start();
  }
  pauseHandler() {
    this.setState({
      ...this.state,
      start: true,
      reset: true,
      lap: false,
      pause: false,
    });
    this.props.pause();
  }
  resetHandler() {
    this.setState({
      start: true,
      reset: false,
      lap: false,
      pause: false,
    });
    this.props.reset();
  }
  lapHandler() {
    this.props.lap();
  }
  getController() {
    let output = null;
    if (this.state.start && !this.state.reset) {
      output = (
        <div className="my-3">
          <button
            className="btn btn-success btn-lg px-4 ml-4"
            onClick={(event) => this.startHandler()}
          >
            Start
          </button>
        </div>
      );
    } else if (this.state.pause && this.state.lap) {
      output = (
        <div className="my-3">
          <button
            className="btn btn-primary btn-lg px-4 ml-4"
            onClick={(event) => this.pauseHandler()}
          >
            Pause
          </button>
          <button
            className="btn btn-warning btn-lg px-4 ml-5"
            onClick={(event) => this.lapHandler()}
          >
            Lap
          </button>
        </div>
      );
    } else if (this.state.start && this.state.reset) {
      output = (
        <div className="my-3">
          <button
            className="btn btn-success btn-lg px-4 ml-4"
            onClick={(event) => this.startHandler()}
          >
            Start
          </button>
          <button
            className="btn btn-danger btn-lg px-4 ml-5"
            onClick={(event) => this.resetHandler()}
          >
            Reset
          </button>
        </div>
      );
    }
    return output;
  }
  render() {
    return this.getController();
  }
}
export default Controller;
