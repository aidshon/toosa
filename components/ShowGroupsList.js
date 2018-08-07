import React from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Modal from "react-native-modal";
import { Font } from "expo";
import * as Animatable from "react-native-animatable";

const { width } = Dimensions.get("window");
const MODAL_WIDTH = width;
const MODAL_HEIGHT = MODAL_WIDTH + 100;
const CARD_WIDTH = width - 50;

class ShowGroupsList extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      arimo: require("../assets/fonts/Arimo.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  state = {
    fontLoaded: false
  };

  handleShowItem = ({ item }) => {
    const { groupListStyle, labelStyle, lineStyle } = styles;

    return (
      this.state.fontLoaded && (
        <Animatable.View animation="bounceIn">
          <View style={groupListStyle}>
            <Text style={[labelStyle, { fontFamily: "arimo" }]}>
              {item.name}
            </Text>
          </View>
          <Text style={lineStyle}>_____________</Text>
        </Animatable.View>
      )
    );
  };

  _keyExtractor = (item, index) => index.toString();

  render() {
    const {
      backgroundImageStyle,
      buttonStyle,
      containerStyle,
      labelStyle,
      modalStyle
    } = styles;
    const { data, modalVisible, onCloseModal } = this.props;

    return (
      this.state.fontLoaded && (
        <Modal
          isVisible={modalVisible}
          animationInTiming={500}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          style={modalStyle}
        >
          <View style={{ height: MODAL_HEIGHT }}>
            <ImageBackground
              source={require("../static/images/modalBackground.png")}
              style={backgroundImageStyle}
              borderRadius={10}
            >
              <TouchableOpacity onPress={onCloseModal} style={buttonStyle}>
                <Text style={[labelStyle, { fontFamily: "arimo" }]}>
                  Закрыть
                </Text>
              </TouchableOpacity>
              <Text
                style={[
                  labelStyle,
                  { fontFamily: "arimo", marginBottom: 10, fontSize: 22 }
                ]}
              >
                Играют:
              </Text>
              <FlatList
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={this.handleShowItem}
                style={containerStyle}
                numColumns={1}
                showsVerticalScrollIndicator={false}
              />
            </ImageBackground>
          </View>
        </Modal>
      )
    );
  }
}

const styles = {
  backgroundImageStyle: {
    flex: 1
  },
  groupListStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  labelStyle: {
    color: "#36254B",
    fontSize: 22,
    alignSelf: "center"
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#36254B",
    width: 100,
    height: 30,
    alignSelf: "flex-end",
    margin: 20
  },
  containerStyle: {
    width: CARD_WIDTH,
    alignSelf: "center",
    flex: 1
  },
  lineStyle: {
    color: "#36254B",
    alignSelf: "center",
    marginBottom: 10
  }
};

export default ShowGroupsList;
