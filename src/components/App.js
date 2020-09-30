import React from "react";
import Title from "../components/title/Title";
import "./App.css";
import CountDown from "./countDown/CountDown";
import Controller from "../components/controller/controller";
import Lap from "./lap/Lap";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        min: 0,
        sec: 0,
        mili: 0,
      },
      laps: [],
    };
  }
  getStart() {
    this.intervalId = setInterval(() => {
      let min = this.state.time.min;
      let sec = this.state.time.sec;
      let mili = this.state.time.mili;

      if (mili >= 10) {
        sec = sec + 1;
        mili = 0;
      }
      if (sec >= 60) {
        min = min + 1;
        sec = 0;
      }
      this.setState({
        ...this.state,
        time: {
          min,
          sec,
          mili: mili + 1,
        },
      });
    }, 100);
  }
  getPause() {
    clearInterval(this.intervalId);
  }
  getLap() {
    let time = this.state.time;
    this.setState({
      ...this.state,
      laps: [time, ...this.state.laps],
    });
    console.log(this.state.laps);
  }
  getReset() {
    this.setState({
      time: {
        min: 0,
        sec: 0,
        mili: 0,
      },
      laps: [],
    });
  }
  render() {
    return (
      <div className="App">
        <div className="container py-5">
          {/* <Title name="faiz" /> */}
          <div className="row">
            <div className="col-sm-8 offset-sm-2">
              <Title />
              <CountDown time={this.state.time} />
              <Controller
                start={this.getStart.bind(this)}
                pause={this.getPause.bind(this)}
                reset={this.getReset.bind(this)}
                lap={this.getLap.bind(this)}
              />
              <Lap className="my-5" laps={this.state.laps} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
