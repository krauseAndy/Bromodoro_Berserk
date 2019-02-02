import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minute: 5,
      seconde: 0,
      isOpen: false
    };

    this.handleStartCount = this.handleStartCount.bind(this);
    this.handleRemoveSeconde = this.handleRemoveSeconde.bind(this);
  }
  componentDidMount() {
    this.handleStartCount();
    var quotes = [
      "Les sentiments ne s'expriment pas seulement pas les mots. Berserk : tome 29",
      "Un rêve est une chose bien étrange… On peut le voir comme le pari du courageux ou bien comme la fuite du lâche. Berserk : tome 25",
      "Pirates et monstres vont bien ensemble ! Tous deux dévorent avidement leur butin ! Beserk, tome 35",
      "La vie n’est que le songe d’une nuit. Berserk, tome 38",
      "Plus la lumière est forte, plus les ténèbres se doivent d’être épaisses. Berserk, tome 8",
      "[Griffith] Il y a ceux qui aspirent à l’hégémonie du monde. Ceux qui consacrent leur vie à maîtriser l’épée. Ceux qui sacrifient leur vie la recherche de leur rêve… et ceux dont le rêve réduit à néant celui des autres. Berserk, tome 6",
      "Dans cette vision de cauchemar, comme une ride à la surface de l'eau, les bêtes et les hommes, les loups et les agneaux, le bien et le mal, le rêve et la réalité, la vie et la mort allaient maintenant main dans la main. Berserk, tome 34",
      "Trop bon, trop con. Berserk, tome 30",
      "Peu importe que l’on soit de sang royal, noble ou modeste… à la guerre, ceux qui échouent meurent. Berserk, tome 8"
    ];
    this.setState({
      random: quotes[Math.floor(Math.random() * quotes.length)]
    });
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
        <p className="styleQuotes">{this.state.random}</p>
        <p>
          {this.state.minute < 10 ? "0" + this.state.minute : this.state.minute}
          :
          {this.state.seconde < 10
            ? "0" + this.state.seconde
            : this.state.seconde}
        </p>
        <p className="modalButton">
          <button onClick={this.props.handleCloseModal}>Close</button>
          <button onClick={this.props.handleRestart}>Restart</button>
        </p>
      </div>
    );
  }
}

export default Modal;
