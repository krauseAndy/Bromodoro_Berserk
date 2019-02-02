import React from "react";
import Header from "./Header";
import Timer from "./Timer";
import Modal from "./Modal";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false,
      minute: 25,
      seconde: 0,
      stockMin: 25,
      isOpen: false
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleRemoveSecondeClick = this.handleRemoveSecondeClick.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.removeMinute = this.removeMinute.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.isTimerFinished = this.isTimerFinished.bind(this);
    this.handleRestartPomodoro = this.handleRestartPomodoro.bind(this);
  }

  handleCloseModal() {
    clearInterval(this.timerSeconde);
    this.setState({
      start: false,
      isOpen: false,
      minute: this.state.stockMin,
      seconde: 0
    });
  }

  handleRestartPomodoro() {
    this.setState({
      isOpen: false,
      minute: this.state.stockMin,
      seconde: 0
    });
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
        seconde: 0
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

    this.setState(
      {
        seconde: (this.state.seconde -= 1)
      },
      function() {
        this.isTimerFinished();
      }
    );
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
      if (this.state.minute === 1) {
        return;
      }
      this.setState({
        minute: (this.state.minute -= 1)
      });
    }
  }

  isTimerFinished() {
    if (this.state.minute === 0 && this.state.seconde === 0) {
      this.setState({
        isOpen: true
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
        {this.state.isOpen && (
          <Modal
            handleCloseModal={this.handleCloseModal}
            handleRestart={this.handleRestartPomodoro}
          />
        )}
      </div>
    );
  }
}

export default App;
