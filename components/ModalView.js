import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Share,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import { Font } from "expo";

const { width } = Dimensions.get("window");
const MODAL_WIDTH = width;
const MODAL_HEIGHT = MODAL_WIDTH + 100;

class ModalView extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      arimo: require("../assets/fonts/Arimo.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  state = {
    fontLoaded: false
  };

  handleShare = gameName => {
    Share.share({
      message:
        "Давай сыграем в игру '" +
        gameName +
        ". Приложение 'Toosa' доступно в AppStore."
    });
  };

  render() {
    const {
      backgroundImageStyle,
      buttonsContainerStyle,
      buttonsStyle,
      buttonsTextStyle,
      gameDescriptionStyle,
      gameInfoContainerStyle,
      gameNameLabelStyle,
      iconStyle,
      lineStyle,
      modalStyle,
      playButtonIconStyle,
      playButtonStyle
    } = styles;
    const {
      handleShowGameOptions,
      itemToShow,
      modalVisible,
      onCloseModal
    } = this.props;

    return (
      <Modal
        isVisible={modalVisible}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={500}
        backdropTransitionOutTiming={500}
        style={modalStyle}
      >
        {this.state.fontLoaded && (
          <View style={{ height: MODAL_HEIGHT }}>
            <ImageBackground
              source={require("../static/images/modalBackground.png")}
              style={backgroundImageStyle}
              borderRadius={10}
            >
              <View style={gameInfoContainerStyle}>
                <Image source={itemToShow.icon} style={iconStyle} />
                <Text style={[gameNameLabelStyle, { fontFamily: "arimo" }]}>
                  {itemToShow.name}
                </Text>
                <Text style={lineStyle}>
                  ____________________________________________
                </Text>
                <Text style={[gameDescriptionStyle, { fontFamily: "arimo" }]}>
                  {itemToShow.description}
                </Text>
              </View>
              <View style={buttonsContainerStyle}>
                {itemToShow.screenName && (
                  <TouchableOpacity
                    onPress={() => this.handleShare(itemToShow.name)}
                    style={buttonsStyle}
                  >
                    <Text style={buttonsTextStyle}>Поделиться</Text>
                  </TouchableOpacity>
                )}
                {itemToShow.screenName && (
                  <TouchableOpacity
                    onPress={handleShowGameOptions}
                    style={playButtonStyle}
                  >
                    <Image
                      style={playButtonIconStyle}
                      source={require("../static/images/icons/play_button.png")}
                    />
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={onCloseModal} style={buttonsStyle}>
                  <Text style={buttonsTextStyle}>Закрыть</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        )}
      </Modal>
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1
  },
  modalStyle: {
    borderRadius: 10,
    alignSelf: "center"
  },
  buttonsTextStyle: {
    fontSize: 18,
    color: "#36254B"
  },
  gameDescriptionStyle: {
    fontSize: 16,
    textAlign: "center",
    padding: 20,
    color: "#36254B"
  },
  gameNameLabelStyle: {
    fontSize: 27,
    color: "#36254B",
    fontWeight: "bold"
  },
  gameInfoContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonsContainerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginBottom: 10
  },
  playButtonIconStyle: {
    width: 60,
    height: 60
  },
  buttonsStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: 120
  },
  playButtonStyle: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    width: 80,
    height: 80,
    alignSelf: "center"
  },
  lineStyle: {
    color: "#36254B50"
  }
};

export default ModalView;
