import React from "react";
import { Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { Font } from "expo";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 20;
const CARD_HEIGHT = CARD_WIDTH - 10;

class GameCard extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      arimo: require("../assets/fonts/Arimo.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  state = {
    fontLoaded: false
  };

  render() {
    const { gameCardStyle, gameIconStyle, gameNameStyle } = styles;
    const { game, onShowGameDescription, isDisabled } = this.props;

    return (
      <TouchableOpacity
        onPress={() => onShowGameDescription(true, game)}
        style={gameCardStyle}
        disabled={isDisabled}
      >
        <Image source={game.icon} style={gameIconStyle} />
        {this.state.fontLoaded && (
          <Text style={[gameNameStyle, { fontFamily: "arimo" }]}>
            {game.name}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = {
  gameCardStyle: {
    backgroundColor: "transparent",
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
    marginBottom: 15
  },
  gameNameStyle: {
    fontSize: 17,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 20,
    color: "#36254B",
    fontWeight: "bold"
  },
  gameIconStyle: {
    width: 50,
    height: 50,
    alignSelf: "center"
  }
};

export default GameCard;
