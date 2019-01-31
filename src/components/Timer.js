import React from "react";

class Timer extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <div className="content is-centered">
            <span>
              {this.props.value.minute < 10
                ? "0" + this.props.value.minute
                : this.props.value.minute}
              :
              {this.props.value.seconde < 10
                ? "0" + this.props.value.seconde
                : this.props.value.seconde}
            </span>
          </div>
          <footer className="card-footer">
            <button
              className={
                this.props.value.start ? "invisible" : "card-footer-item"
              }
              disabled={this.props.stop}
              onClick={this.props.addclick}
            >
              ADD
            </button>
            <button
              className="card-footer-item"
              onClick={this.props.handleStart}
            >
              {this.props.value.start ? "Reset" : "Start"}
            </button>
            <button
              className={
                this.props.value.start ? "invisible" : "card-footer-item"
              }
              onClick={this.props.removeclick}
            >
              REMOVE
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Timer;
