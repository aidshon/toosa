import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import { Font } from "expo";
import * as Animatable from "react-native-animatable";
import { Header, NextButton } from "../components";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 100;

class ExplainAddWordsScreen extends React.Component {
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
    wordsList: [],
    word: "",
    fontLoaded: false
  };

  groupsList = this.props.navigation.getParam("groupsList");

  handleAddWords = () => {
    if (this.state.word) {
      this.setState({
        wordsList: [...this.state.wordsList, this.state.word.toUpperCase()],
        word: ""
      });
    }
  };

  handleShowExplainGameScreen = () => {
    this.props.navigation.navigate("ExplainGameScreen", {
      wordsList: this.state.wordsList,
      groupsList: this.groupsList,
      currentGroupIndex: 0,
      wordToShow: this.state.wordsList[this.state.wordsList.length - 1]
    });
  };

  handleGoHome = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    const {
      backgroundImageStyle,
      containerStyle,
      inputStyle,
      labelStyle,
      mainContainerStyle,
      optionsStyle,
      wrapperStyle
    } = styles;

    return (
      <ImageBackground
        source={require("../static/images/background.png")}
        style={backgroundImageStyle}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <Header
          headerText={"Настройки игры"}
          handleGoHome={this.handleGoHome}
        />
        {this.state.fontLoaded && (
          <Text style={[optionsStyle, { fontFamily: "arimo" }]}>
            Каждый игрок команды вводит по 4 слова. Как только наберется
            необходимое количество слов можно начинать играть. Передавайте
            телефон по порядку каждому игроку.
          </Text>
        )}
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={mainContainerStyle}
        >
          <View style={containerStyle}>
            <Text style={labelStyle}>
              Количество слов: {this.state.wordsList.length}
            </Text>
            <Text style={labelStyle}>
              Осталось:{" "}
              {this.groupsList.length * 8 - this.state.wordsList.length}
            </Text>
            <Text style={labelStyle}>Введите слово:</Text>
            <View style={wrapperStyle}>
              <TextInput
                style={inputStyle}
                value={this.state.word}
                onChangeText={word => this.setState({ word })}
              />
              {this.state.word &&
                this.state.wordsList.length !== this.groupsList.length * 8 && (
                  <Animatable.View animation="fadeInRight">
                    <TouchableOpacity onPress={this.handleAddWords}>
                      <Icon name="add" size={40} color="#FFFFFF" />
                    </TouchableOpacity>
                  </Animatable.View>
                )}
            </View>
          </View>
        </KeyboardAvoidingView>
        {this.state.wordsList.length === this.groupsList.length * 8 && (
          <Animatable.View
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
          >
            <NextButton onShowScreen={this.handleShowExplainGameScreen} />
          </Animatable.View>
        )}
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1
  },
  inputStyle: {
    width: CARD_WIDTH,
    height: 45,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "#FFFFFF",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center"
  },
  mainContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  optionsStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "center",
    padding: 15,
    marginBottom: 40
  },
  labelStyle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 10,
    fontWeight: "bold"
  },
  containerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  wrapperStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  }
};

export default ExplainAddWordsScreen;
