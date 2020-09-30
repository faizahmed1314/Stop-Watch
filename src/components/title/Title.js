import React, { Component } from "react";
import "../title/Title.css";
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   number: 0,
      title: "This is a dummy text",
      isInput: false,
    };
  }

  //   Counter() {
  //     this.setState({
  //       number: this.state.number + 1,
  //     });
  //     console.log(this.state.number);
  //   }
  editHandler() {
    this.setState({
      ...this.state,
      isInput: true,
    });
  }
  inputChangeHandler(e) {
    this.setState({
      ...this.state,
      title: e.target.value,
    });
  }
  keyPressHandler(e) {
    // console.log(e.key);
    if (e.key === "Enter") {
      this.setState({
        ...this.state,
        isInput: false,
      });
    }
  }
  blurHandler(e) {
    this.setState({
      ...this.state,
      isInput: false,
    });
  }
  render() {
    let output = null;
    if (this.state.isInput) {
      output = (
        <div className="title">
          <input
            className="form-control"
            type="text"
            value={this.state.title}
            onChange={(e) => this.inputChangeHandler(e)}
            onKeyPress={(e) => this.keyPressHandler(e)}
            onBlur={(event) => this.blurHandler(event)}
          />
        </div>
      );
    } else {
      output = (
        <div className="d-flex title">
          <h1 className="display-4">{this.state.title}</h1>
          <span
            onClick={() => this.editHandler()}
            className="ml-auto edit-icon"
          >
            <i className="fas fa-edit"></i>
          </span>
        </div>
      );
    }
    return (
      <div>
        {/* <h1>I am from title {this.props.name}</h1>
        <p>The number is {this.state.number}</p>
        <button onClick={() => this.Counter()}>Click Me</button> */}
        {output}
      </div>
    );
  }
}
export default Title;
