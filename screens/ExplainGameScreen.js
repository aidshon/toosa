import React from "react";
import { Dimensions, ImageBackground, StatusBar, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import { ExplainGameScreenBody, Header } from "../components";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width / 2 - 30;

class ExplainGameScreen extends React.Component {
  componentWillMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  wordsList = this.props.navigation.getParam("wordsList");
  groupsList = this.props.navigation.getParam("groupsList");
  length = this.groupsList.length;
  currentGroupIndex = this.props.navigation.getParam("currentGroupIndex");
  wordToShow = this.wordsList[this.wordsList.length - 1];

  handleTimeFinished = () => {
    if (this.wordsList.length !== 0) {
      this.props.navigation.navigate("ExplainScoreScreen", {
        groupsList: this.groupsList,
        currentGroupIndex: this.currentGroupIndex,
        wordsList: this.wordsList,
        isEnd: false
      });
    } else {
      this.props.navigation.navigate("ExplainScoreScreen", {
        groupsList: this.groupsList,
        currentGroupIndex: this.currentGroupIndex,
        wordsList: this.wordsList,
        isEnd: true
      });
    }
  };

  handleShowExplainGameScreen = index => {
    this.props.navigation.navigate("ExplainGameScreen", {
      currentGroupIndex: index,
      wordsList: this.wordsList,
      groupsList: this.groupsList
    });
  };

  handleUpdateData = (groupName, wordsList) => {
    this.wordsList = wordsList;

    this.groupsList.map(item => {
      if (item.name === groupName) {
        item.points += 1;
      }
    });
  };

  handleGoHome = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    const { backgroundImageStyle, labelStyle, optionsStyle } = styles;

    return (
      <ImageBackground
        source={require("../static/images/background.png")}
        style={backgroundImageStyle}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <Header
          headerText={"Объясни соседу"}
          handleGoHome={this.handleGoHome}
        />
        <Text style={optionsStyle}>
          Нажмите на карточку со словом в случае отгадывания. Пропустить слово
          нельзя.
        </Text>
        <Text style={labelStyle}>
          Играет команда: {this.groupsList[this.currentGroupIndex].name}
        </Text>
        <CountDown
          until={20}
          timeToShow={["M", "S"]}
          size={30}
          timeTxtColor={"transparent"}
          digitTxtColor={"white"}
          onFinish={this.handleTimeFinished}
        />
        <ExplainGameScreenBody
          wordsList={this.wordsList}
          groupsList={this.groupsList}
          wordToShow={this.wordToShow}
          currentGroupIndex={this.currentGroupIndex}
          handleUpdateData={this.handleUpdateData}
          handleWordsOver={this.handleTimeFinished}
        />
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1
  },
  labelStyle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    alignSelf: "center",
    margin: 5
  },
  optionsStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "center",
    padding: 15
  }
};

export default ExplainGameScreen;
