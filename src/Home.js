import React from "react";
import "./Home.css";

export default class Home extends React.Component {
  state = {
    input: ""
  };
  handelInput = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.input);
  };

  render() {
    return (
      <div>
        <h1>Welcome To MY Home</h1>

        <input
          onChange={(e) => this.handelInput(e)}
          value={this.setState.handelInput}
        />
        <button onClick={(e) => this.handleSubmit(e)} type="submit">
          SAVE
        </button>
      </div>
    );
  }
}
