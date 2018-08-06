import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

class HomeButton extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.handleGoHome}>
        <Icon name="home" color="#FFFFFF" size={40} />
      </TouchableOpacity>
    );
  }
}

export default HomeButton;
