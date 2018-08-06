import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { Font } from "expo";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width - 20;
const CARD_HEIGHT = CARD_WIDTH / 2 - 100;

class CrocodileCategoryCard extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      arimo: require("../assets/fonts/Arimo.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  state = {
    fontLoaded: false
  };

  render() {
    const {
      categoryCardStyle,
      categoryIconStyle,
      categoryNameStyle,
      containerStyle,
      iconStyle
    } = styles;
    const { categoryIcon, categoryName, onCheckCategory } = this.props;

    return (
      <TouchableOpacity onPress={onCheckCategory} style={categoryCardStyle}>
        <View style={containerStyle}>
          <Image source={categoryIcon} style={categoryIconStyle} />
          {this.state.fontLoaded && (
            <Text style={[categoryNameStyle, { fontFamily: "arimo" }]}>
              {categoryName}
            </Text>
          )}
        </View>
        <Icon
          name="chevron-right"
          color="#36254B"
          size={50}
          style={iconStyle}
        />
      </TouchableOpacity>
    );
  }
}

const styles = {
  categoryCardStyle: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginBottom: 15,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  categoryNameStyle: {
    fontSize: 18,
    color: "#36254B",
    textAlign: "left",
    fontWeight: "bold"
  },
  categoryIconStyle: {
    width: 40,
    height: 40,
    marginLeft: 20,
    marginRight: 20
  },
  containerStyle: {
    flexDirection: "row"
  },
  iconStyle: {
    marginRight: 20
  }
};

export default CrocodileCategoryCard;
