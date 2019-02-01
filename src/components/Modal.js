import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minute: 5,
      seconde: 0,
      start: false
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
        <p>"QUOTE"</p>
        <p>
          {this.state.minute}:{this.state.seconde}
        </p>
      </div>
    );
  }
}

export default Modal;
