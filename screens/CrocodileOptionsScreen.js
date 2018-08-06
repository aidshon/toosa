import React from "react";
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import { Font } from "expo";
import { Header, NextButton } from "../components";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 134;

class CrocodileOptionsScreen extends React.Component {
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
    time: 1,
    friendName: "",
    friendsNameList: [],
    fontLoaded: false
  };

  handleAddFriends = () => {
    if (this.state.friendName) {
      this.setState({
        friendsNameList: [...this.state.friendsNameList, this.state.friendName],
        friendName: ""
      });
    }
  };

  handleShowCategoriesListScreen = () => {
    this.props.navigation.navigate("CrocodileCategoriesListScreen", {
      friendsList: this.state.friendsNameList,
      time: this.state.time
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
      mainContainerStyle,
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
              По желанию можно ввести имена участников для рандомного выбора
              жертвы и указать ограничение по времени. По умолчанию дается 1
              минута на объяснение.
            </Text>
          )}
          <KeyboardAvoidingView
            behavior="padding"
            enabled
            style={mainContainerStyle}
          >
            <View style={containerStyle}>
              {this.state.fontLoaded && (
                <Text style={[labelStyle, { fontFamily: "arimo" }]}>
                  Введите имена участников:
                </Text>
              )}
              <View style={wrapperStyle}>
                <TextInput
                  style={inputStyle}
                  value={this.state.friendName}
                  onChangeText={friendName => this.setState({ friendName })}
                />
                <TouchableOpacity onPress={this.handleAddFriends}>
                  <Icon
                    name="add"
                    size={40}
                    color="#FFFFFF"
                    style={addButtonStyle}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={containerStyle}>
              {this.state.fontLoaded && (
                <Text style={[labelStyle, { fontFamily: "arimo" }]}>
                  Введите время:
                </Text>
              )}
              <View style={wrapperStyle}>
                <TextInput
                  keyboardType="numeric"
                  style={[
                    inputStyle,
                    { marginRight: 10, width: 49, textAlign: "center" }
                  ]}
                  onChangeText={time => this.setState({ time })}
                  maxLength={1}
                />
                {this.state.fontLoaded && (
                  <Text
                    style={[labelStyle, { fontSize: 20, fontFamily: "arimo" }]}
                  >
                    минут(-ы)
                  </Text>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
        <NextButton onShowScreen={this.handleShowCategoriesListScreen} />
      </ImageBackground>
    );
  }
}

const styles = {
  mainContainerStyle: {
    marginTop: 20
  },
  backgroundImageStyle: {
    flex: 1
  },
  inputStyle: {
    width: CARD_WIDTH,
    height: 41,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    padding: 8,
    fontSize: 20,
    color: "#36254B"
  },
  containerStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginBottom: 20,
    fontWeight: "bold"
  },
  wrapperStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  addButtonStyle: {
    marginLeft: 15
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

export default CrocodileOptionsScreen;
