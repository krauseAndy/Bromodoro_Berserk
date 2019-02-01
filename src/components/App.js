import React from "react";
import Header from "./Header";
import Timer from "./Timer";
import Modal from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      minute: 0,
      seconde: 2,
      stockMin: 0
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleRemoveSecondeClick = this.handleRemoveSecondeClick.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.removeMinute = this.removeMinute.bind(this);
  }

  handleStartClick() {
    if (this.state.start === false) {
      this.setState(
        {
          start: true
        },
        function() {
          this.timerSeconde = setInterval(this.handleRemoveSecondeClick, 1000);
        }
      );
    } else {
      clearInterval(this.timerSeconde);
      this.setState({
        start: false,
        minute: this.state.stockMin,
        seconde: 2
      });
    }
  }

  handleRemoveSecondeClick() {
    if (this.state.minute === 0 && this.state.seconde === 0) {
      return;
    }

    if (this.state.seconde === 0) {
      this.state.minute -= 1;
      this.state.seconde = 60;
    }

    this.setState({
      seconde: (this.state.seconde -= 1)
    });
  }
  addMinute() {
    if (!this.state.start) {
      if (this.state.minute === 60) {
        return;
      }
      this.setState({
        minute: (this.state.minute += 1)
      });
    }
  }
  removeMinute() {
    if (!this.state.start) {
      if (this.state.minute === 0) {
        return;
      }
      this.setState({
        minute: (this.state.minute -= 1)
      });
    }
  }
  render() {
    return (
      <div className="containerGlobal">
        <Header />
        <Timer
          handleStart={this.handleStartClick}
          value={this.state}
          addclick={this.addMinute}
          removeclick={this.removeMinute}
        />

        {this.state.minute === 0 && this.state.seconde === 0 && <Modal />}
      </div>
    );
  }
}

export default App;
