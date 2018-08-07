import React from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

class NextButton extends React.Component {
  render() {
    const { onShowScreen, isDisabled } = this.props;

    return (
      <TouchableOpacity
        onPress={onShowScreen}
        style={styles.nextButtonWrapperStyle}
        disabled={isDisabled}
      >
        <Icon name="skip-next" size={50} color="#FFFFFF" />
      </TouchableOpacity>
    );
  }
}

const styles = {
  nextButtonWrapperStyle: {
    alignSelf: "flex-end",
    margin: 15
  }
};

export default NextButton;
