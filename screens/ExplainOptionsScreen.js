import React from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  LayoutAnimation,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import { Font } from "expo";
import * as Animatable from "react-native-animatable";
import { Header, NextButton, ShowGroupsList } from "../components";

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
    LayoutAnimation.spring();
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  state = {
    groupName: "",
    groupsList: [],
    fontLoaded: false,
    modalVisible: false
  };

  setModalUnVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleAddGroup = () => {
    if (this.state.groupName) {
      group = {
        name: this.state.groupName.toUpperCase(),
        points: 0
      };

      contains = false;
      this.state.groupsList.map(item => {
        if (item.name === this.state.groupName.toUpperCase()) {
          contains = true;
        }
      });

      if (!contains) {
        this.setState({
          groupsList: [...this.state.groupsList, group],
          groupName: ""
        });
      }
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
      this.state.fontLoaded && (
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
            <Text style={[optionsStyle, { fontFamily: "arimo" }]}>
              Введите названия всех команд. Не забывайте, что в каждой команде
              по 2 игрока. Количество команд должно быть как минимум 2.
            </Text>
            <KeyboardAvoidingView
              style={containerStyle}
              behavior="padding"
              enabled
            >
              <Text style={[labelStyle, { fontFamily: "arimo" }]}>
                Введите названия команд:
              </Text>
              <View style={wrapperStyle}>
                <TextInput
                  style={[inputStyle, { fontFamily: "arimo" }]}
                  value={this.state.groupName}
                  onChangeText={groupName => this.setState({ groupName })}
                />
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
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    modalVisible: true
                  })
                }
              >
                <Text
                  style={[labelStyle, { fontFamily: "arimo", marginTop: 20 }]}
                >
                  Показать список
                </Text>
              </TouchableOpacity>
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
          <ShowGroupsList
            modalVisible={this.state.modalVisible}
            data={this.state.groupsList}
            onCloseModal={() =>
              this.setModalUnVisible(!this.state.modalVisible)
            }
            handleGoNext={() => this.handleShowCategoriesListScreen}
          />
        </ImageBackground>
      )
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
