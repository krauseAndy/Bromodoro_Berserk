import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minute: 0,
      seconde: 2,
      isOpen: false
    };
    this.handleStartCount = this.handleStartCount.bind(this);
    this.handleRemoveSeconde = this.handleRemoveSeconde.bind(this);
  }
  componentDidMount() {
    this.handleStartCount();
  }

  handleStartCount() {
    this.setState(
      {
        start: true
      },

      function() {
        var timerSeconde = setInterval(this.handleRemoveSeconde, 1000);
      }
    );
  }

  handleRemoveSeconde() {
    if (this.state.seconde === 0 && this.state.minute === 0) {
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

  render() {
    return (
      <div className="modal">
        <p className="styleQuotes">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo"
        </p>
        <span>
          {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}
          :
          {this.state.seconde < 10
            ? "0" + this.state.seconde
            : this.state.seconde}
        </span>
        <p className="modalButton">
          <button>Fermer</button>
          <button>Restart</button>
        </p>
      </div>
    );
  }
}

export default Modal;
