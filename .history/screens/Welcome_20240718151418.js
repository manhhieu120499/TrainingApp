import React from "react";
import { Text, View, Dimensions } from "react-native";
import { transformer } from "../metro.config";

function Welcome(props) {
  const { width, height } = Dimensions.get("window");
  const stylesContainer = {
    backgroundColor: "black",
    width: width,
    height: height,
    position: "relative",
  };

  const stylesText = {
    position: "absolute",
    transform: "translate(0, -50%)",
  };
  return (
    <View style={stylesContainer}>
      <Text style={stylesText}>Welcome to REACT NATIVE</Text>
    </View>
  );
}

export default Welcome;
