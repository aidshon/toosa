import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  LayoutAnimation,
  StatusBar,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { Header } from "../components";

const { width, height } = Dimensions.get("window");
const CARD_WIDTH = width - 50;
const CARD_HEIGHT = height - 200;

class ExplainScoreScreen extends React.Component {
  componentWillMount() {
    LayoutAnimation.spring();
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  groupsList = this.props.navigation.getParam("groupsList");
  currentGroupIndex = this.props.navigation.getParam("currentGroupIndex");
  wordsList = this.props.navigation.getParam("wordsList");
  isEnd = this.props.navigation.getParam("isEnd");

  handleOK = () => {
    if (this.wordsList.length > 0) {
      if (this.currentGroupIndex < this.groupsList.length - 1) {
        this.currentGroupIndex = this.currentGroupIndex + 1;
      } else {
        this.currentGroupIndex = 0;
      }
      this.props.navigation.navigate("ExplainGameScreen", {
        currentGroupIndex: this.currentGroupIndex,
        wordsList: this.wordsList,
        groupsList: this.groupsList
      });
    }
  };

  handleShowItem = ({ item }) => {
    const { groupListStyle, labelStyle, lineStyle } = styles;

    return (
      <Animatable.View animation="bounceIn">
        <View style={groupListStyle}>
          <Text style={[labelStyle, { fontWeight: "bold" }]}>{item.name}</Text>
          <Text style={[labelStyle, { fontSize: 18 }]}>{item.points}</Text>
        </View>
        <Text style={lineStyle}>
          ______________________________________________
        </Text>
      </Animatable.View>
    );
  };

  _keyExtractor = (item, index) => index.toString();

  handleGoHome = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    console.disableYellowBox = true;

    const {
      backgroundImageStyle,
      buttonStyle,
      containerStyle,
      labelStyle
    } = styles;

    return (
      <ImageBackground
        source={require("../static/images/background.png")}
        style={backgroundImageStyle}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <Header headerText={"Scoreboard"} handleGoHome={this.handleGoHome} />
        {this.isEnd ? (
          <View>
            <Text style={[labelStyle, { marginBottom: 10 }]}>
              Игра закончена.
            </Text>
            <TouchableOpacity onPress={this.handleGoHome} style={buttonStyle}>
              <Text style={labelStyle}>OK</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={this.handleOK} style={buttonStyle}>
            <Text style={labelStyle}>OK</Text>
          </TouchableOpacity>
        )}
        <FlatList
          data={this.groupsList}
          keyExtractor={this._keyExtractor}
          renderItem={this.handleShowItem}
          style={containerStyle}
          numColumns={1}
          showsVerticalScrollIndicator={false}
        />
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1
  },
  groupListStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1
  },
  labelStyle: {
    color: "#FFFFFF",
    fontSize: 22,
    alignSelf: "center"
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    width: 80,
    alignSelf: "center",
    marginTop: 10
  },
  containerStyle: {
    width: CARD_WIDTH,
    alignSelf: "center",
    flex: 1
  },
  lineStyle: {
    color: "#FFFFFF",
    alignSelf: "center",
    marginBottom: 10
  }
};

export default ExplainScoreScreen;
