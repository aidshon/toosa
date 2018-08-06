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

class ExplainOptionsScreen extends React.Component {
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
    groupName: "",
    groupsList: [],
    wordsList: [],
    word: "",
    fontLoaded: false
  };

  handleAddGroup = () => {
    if (this.state.groupName) {
      group = {
        name: this.state.groupName.toUpperCase(),
        points: 0
      };

      this.setState({
        groupsList: [...this.state.groupsList, group],
        groupName: ""
      });
    }
  };

  handleShowExplainGameScreen = () => {
    this.props.navigation.navigate("ExplainAddWordsScreen", {
      groupsList: this.state.groupsList
    });
  };

  handleGoHome = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    const {
      addButtonStyle,
      backgroundImageStyle,
      containerStyle,
      inputStyle,
      labelStyle,
      mainWrapperStyle,
      optionsStyle,
      wrapperStyle
    } = styles;

    return (
      <ImageBackground
        source={require("../static/images/background.png")}
        style={backgroundImageStyle}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <View style={mainWrapperStyle}>
          <Header
            headerText={"Настройки игры"}
            handleGoHome={this.handleGoHome}
          />
          {this.state.fontLoaded && (
            <Text style={[optionsStyle, { fontFamily: "arimo" }]}>
              Введите названия всех команд. Не забывайте, что в каждой команде
              по 2 игрока. Количество команд должно быть как минимум 2.
            </Text>
          )}
          <KeyboardAvoidingView
            style={containerStyle}
            behavior="padding"
            enabled
          >
            {this.state.fontLoaded && (
              <Text style={[labelStyle, { fontFamily: "arimo" }]}>
                Введите названия команд:
              </Text>
            )}
            <View style={wrapperStyle}>
              {this.state.fontLoaded && (
                <TextInput
                  style={[inputStyle, { fontFamily: "arimo" }]}
                  value={this.state.groupName}
                  onChangeText={groupName => this.setState({ groupName })}
                />
              )}
              {this.state.groupName && (
                <Animatable.View animation="fadeInRight">
                  <TouchableOpacity onPress={this.handleAddGroup}>
                    <Icon
                      name="add"
                      size={40}
                      color="#FFFFFF"
                      style={addButtonStyle}
                    />
                  </TouchableOpacity>
                </Animatable.View>
              )}
            </View>
          </KeyboardAvoidingView>
        </View>
        {this.state.groupsList.length > 1 && (
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
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: 8,
    color: "#36254B",
    fontSize: 20
  },
  addButtonStyle: {
    marginLeft: 15
  },
  wrapperStyle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  labelStyle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 20,
    fontWeight: "bold"
  },
  containerStyle: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  mainWrapperStyle: {
    paddingTop: 20
  },
  optionsStyle: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    alignSelf: "center",
    padding: 15
  }
};

export default ExplainOptionsScreen;
