import React from "react";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import { Font } from "expo";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 + 50;
const CARD_HEIGHT = CARD_WIDTH - 50;

class ExplainGameScreenBody extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      arimo: require("../assets/fonts/Arimo.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  componentWillMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  state = {
    currentGroupIndex: this.props.currentGroupIndex,
    wordToShow: this.props.wordToShow,
    modalVisible: false,
    wordsList: this.props.wordsList,
    fontLoaded: false
  };

  handleSwipe = () => {
    if (this.state.wordsList !== 0) {
      length = this.state.wordsList.length;
      randomItemIndex = Math.floor(Math.random() * length);
      this.setState({
        wordsList: this.state.wordsList.filter(
          item => item !== this.state.wordToShow
        )
      });

      this.props.groupsList.map(item => {
        if (
          item.name === this.props.groupsList[this.state.currentGroupIndex].name
        ) {
          this.props.handleUpdateData(item.name, this.state.wordsList);
        }
      });

      this.setState({
        wordToShow: this.state.wordsList[randomItemIndex]
      });
    } else {
      this.props.handleWordsOver;
    }
  };

  render() {
    const { wordContainerStyle, wordStyle } = styles;

    return (
      <TouchableOpacity onPress={this.handleSwipe} style={wordContainerStyle}>
        {this.state.fontLoaded && (
          <Text style={[wordStyle, { fontFamily: "arimo" }]}>
            {this.state.wordToShow}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = {
  wordContainerStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 10,
    flexDirection: "column",
    alignSelf: "center",
    marginTop: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  wordStyle: {
    fontSize: 22,
    color: "#36254B",
    alignSelf: "center"
  }
};

export default ExplainGameScreenBody;
