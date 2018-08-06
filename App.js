import React from "react";
import { createSwitchNavigator } from "react-navigation";
import {
  HomeScreen,
  CrocodileOptionsScreen,
  CrocodileCategoriesListScreen,
  CrocodileGameScreen,
  ExplainOptionsScreen,
  ExplainAddWordsScreen,
  ExplainGameScreen,
  ExplainScoreScreen
} from "./screens";

const RootStack = createSwitchNavigator(
  {
    HomeScreen: HomeScreen,
    CrocodileOptionsScreen: CrocodileOptionsScreen,
    CrocodileCategoriesListScreen: CrocodileCategoriesListScreen,
    CrocodileGameScreen: CrocodileGameScreen,
    ExplainOptionsScreen: ExplainOptionsScreen,
    ExplainAddWordsScreen: ExplainAddWordsScreen,
    ExplainGameScreen: ExplainGameScreen,
    ExplainScoreScreen: ExplainScoreScreen
  },
  {
    initialRouteName: "HomeScreen"
  }
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;
