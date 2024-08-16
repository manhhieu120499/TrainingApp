import React from "react";
import { Text, View, Dimensions } from "react-native";
import { sumTwoNumber } from "../utilities/Calculation";

function Welcome(props) {
  const { width, height } = Dimensions.get("window");
  const stylesContainer = {
    backgroundColor: "black",
    width: width,
    height: height,
    position: "relative",
  };
  return (
    <View>
      <Text>Welcome to REACT NATIVE</Text>
    </View>
  );
}

export default MainScreen;
