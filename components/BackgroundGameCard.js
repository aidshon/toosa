import React from "react";
import { Dimensions, View } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 20;
const CARD_HEIGHT = CARD_WIDTH - 10;

class BackgroundGameCard extends React.Component {
  render() {
    return (
      <View
        style={[
          styles.gameCardStyle,
          { backgroundColor: this.props.isDisabled ? "lightgray" : "#FFFFFF" }
        ]}
      />
    );
  }
}

const styles = {
  gameCardStyle: {
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: "center",
    marginBottom: 15,
    flex: 1
  }
};

export default BackgroundGameCard;
