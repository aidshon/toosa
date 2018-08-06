import React from "react";
import { Text, View } from "react-native";
import { HomeButton } from "../components";
import { Font } from "expo";

class Header extends React.Component {
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
    const { headerStyle, headerWrapperStyle } = styles;
    const { handleGoHome, headerText } = this.props;

    return (
      <View style={headerWrapperStyle}>
        {this.state.fontLoaded && (
          <Text style={[headerStyle, { fontFamily: "arimo" }]}>
            {headerText}
          </Text>
        )}
        <HomeButton handleGoHome={handleGoHome} />
      </View>
    );
  }
}

const styles = {
  headerStyle: {
    fontSize: 20,
    alignSelf: "flex-start",
    color: "#FFFFFF",
    fontWeight: "bold",
    marginTop: 10
  },
  headerWrapperStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 10
  }
};

export default Header;
