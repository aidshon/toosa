import React from "react";
import { ImageBackground, ScrollView, StatusBar } from "react-native";
import { CrocodileCategoryCard, Header } from "../components";
import { categories } from "../data/data";

class CrocodileCategoriesListScreen extends React.Component {
  componentWillMount() {
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  state = {
    checkedCategoryIndex: null
  };

  friendsList = this.props.navigation.getParam("friendsList");
  time = this.props.navigation.getParam("time");

  handleShowCrocodileGameScreen = category => {
    randomFriendIndex = Math.floor(Math.random() * this.friendsList.length);
    friend = this.friendsList[randomFriendIndex];

    categories.map(item => {
      if (item.id === category.id) {
        randomWordIndex = Math.floor(Math.random() * item.words.length);
        word = item.words[randomWordIndex];
      }
    });

    this.props.navigation.navigate("CrocodileGameScreen", {
      friend: friend,
      word: word,
      friendsList: this.friendsList,
      time: this.time
    });
  };

  handleGoHome = () => {
    this.props.navigation.navigate("HomeScreen");
  };

  render() {
    const { backgroundImageStyle, viewStyle } = styles;

    return (
      <ImageBackground
        source={require("../static/images/background.png")}
        style={backgroundImageStyle}
      >
        <StatusBar barStyle="light-content" hidden={false} />
        <Header
          headerText={"Выберите категорию"}
          handleGoHome={this.handleGoHome}
        />
        <ScrollView showsVerticalScrollIndicator={false} style={viewStyle}>
          {categories.map((item, index) => (
            <CrocodileCategoryCard
              key={index}
              categoryName={item.name}
              categoryIcon={item.icon}
              onCheckCategory={() => this.handleShowCrocodileGameScreen(item)}
            />
          ))}
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1
  },
  viewStyle: {
    flex: 1,
    alignSelf: "center"
  }
};

export default CrocodileCategoriesListScreen;
