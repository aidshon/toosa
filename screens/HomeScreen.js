import React from "react";
import {
  FlatList,
  ImageBackground,
  LayoutAnimation,
  StatusBar,
  Text,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { BackgroundGameCard, GameCard, ModalView } from "../components";
import { games } from "../data/data";

class HomeScreen extends React.Component {
  componentWillMount() {
    LayoutAnimation.spring();
    Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  state = {
    modalVisible: false,
    itemToShow: {}
  };

  setModalUnVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  handleShowGameDescription = (visible, item) => {
    this.setState({ modalVisible: visible, itemToShow: item });
  };

  handleShowGameOptions = game => {
    this.setModalUnVisible(false);
    this.props.navigation.navigate(game.screenName);
  };

  handleShowItem = ({ item }) => {
    const { cardWrapperStyle } = styles;
    isDisabled = false;
    if (!item.description) {
      isDisabled = true;
    }

    return (
      <Animatable.View animation="bounceIn" style={cardWrapperStyle}>
        <GameCard
          game={item}
          onShowGameDescription={(visible, game) =>
            this.handleShowGameDescription(visible, game)
          }
          isDisabled={isDisabled}
        />
      </Animatable.View>
    );
  };

  handleShowItemBackground = ({ item }) => {
    isDisabled = false;
    if (!item.description) {
      isDisabled = true;
    }

    return (
      <Animatable.View
        animation="bounceIn"
        easing="ease-out"
        style={styles.cardWrapperStyle}
      >
        <BackgroundGameCard isDisabled={isDisabled} />
      </Animatable.View>
    );
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    const {
      backgroundImageStyle,
      containerStyle,
      headerStyle,
      mainContainerStyle
    } = styles;

    return (
      <View style={mainContainerStyle}>
        <StatusBar barStyle="light-content" hidden={false} />
        <Text style={headerStyle}>Toosa</Text>
        <FlatList
          data={games}
          keyExtractor={this._keyExtractor}
          scrollEnabled={false}
          renderItem={this.handleShowItemBackground}
          style={containerStyle}
          numColumns={2}
        />
        <ImageBackground
          source={require("../static/images/circles.png")}
          style={backgroundImageStyle}
        >
          <FlatList
            data={games}
            keyExtractor={this._keyExtractor}
            scrollEnabled={false}
            renderItem={this.handleShowItem}
            style={[containerStyle, { marginTop: 80 }]}
            numColumns={2}
          />
        </ImageBackground>
        <ModalView
          modalVisible={this.state.modalVisible}
          itemToShow={this.state.itemToShow}
          onCloseModal={() => this.setModalUnVisible(!this.state.modalVisible)}
          handleShowGameOptions={() =>
            this.handleShowGameOptions(this.state.itemToShow)
          }
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "column"
  },
  mainContainerStyle: {
    flex: 1,
    backgroundColor: "#36254B"
  },
  cardWrapperStyle: {
    alignItems: "center",
    flex: 1
  },
  backgroundImageStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  headerStyle: {
    fontSize: 20,
    color: "#FFFFFF",
    marginTop: 40,
    marginBottom: 20,
    fontWeight: "bold",
    marginLeft: 10
  }
};

export default HomeScreen;
