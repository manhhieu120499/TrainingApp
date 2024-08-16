import React from "react";
import { Text, View, Dimensions } from "react-native";

function Welcome(props) {
  const { width, height } = Dimensions.get("window");
  const stylesContainer = {
    backgroundColor: "black",
    width: width,
    height: height,
    position: "relative",
  };
  return (
    <View style={stylesContainer}>
      <Text>Welcome to REACT NATIVE</Text>
    </View>
  );
}

export default MainScreen;
