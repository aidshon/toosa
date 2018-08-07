import React from "react";
import {
  Dimensions,
  ImageBackground,
  LayoutAnimation,
  StatusBar,
  Text,
  View
} from "react-native";
import CountDown from "react-native-countdown-component";
import { Header, NextButton } from "../components";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 100;

class CrocodileGameScreen extends React.Component {
  componentWillMount() {
    LayoutAnimation.spring();
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  friend = this.props.navigation.getParam("friend");
  word = this.props.navigation.getParam("word");
  friendsList = this.props.navigation.getParam("friendsList");
  time = this.props.navigation.getParam("time");

  handleShowCrocodileCategoriesListScreen = () => {
    this.props.navigation.navigate("CrocodileCategoriesListScreen", {
      friendsList: this.friendsList,
      time: this.time
    });
  };

  handleGoHome = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    const {
      backgroundImageStyle,
      containerStyle,
      labelStyle,
      wordContainerStyle
    } = styles;

    return (
      <ImageBackground
        source={require("../static/images/background.png")}
        style={backgroundImageStyle}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <Header headerText={"Крокодил"} handleGoHome={this.handleGoHome} />
        <View style={containerStyle}>
          <CountDown
            until={this.time * 60}
            onFinish={() => alert("Game over!")}
            timeToShow={["M", "S"]}
            size={30}
            timeTxtColor={"transparent"}
            digitTxtColor={"white"}
          />
          {this.friend ? (
            <Text style={[labelStyle, { marginBottom: 30, color: "white" }]}>
              {this.friend} должен(-а) показать:
            </Text>
          ) : (
            <Text style={[labelStyle, { marginBottom: 30, color: "white" }]}>
              Вы должны показать:
            </Text>
          )}
          <View style={wordContainerStyle}>
            <Text style={[labelStyle, { fontSize: 24 }]}>
              {this.word.toUpperCase()}
            </Text>
          </View>
          <NextButton
            onShowScreen={this.handleShowCrocodileCategoriesListScreen}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1
  },
  containerStyle: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40
  },
  labelStyle: {
    fontSize: 20,
    color: "#36254B"
  },
  wordContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: CARD_WIDTH,
    height: 65,
    borderRadius: 10,
    marginBottom: 30
  }
};

export default CrocodileGameScreen;
