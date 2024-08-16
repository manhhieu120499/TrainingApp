import React from "react";
import { Text, View, Dimensions } from "react-native";
import { transformer } from "../metro.config";

function Welcome(props) {
  const { width, height } = Dimensions.get("window");
  const stylesContainer = {
    backgroundColor: "black",
    width: width,
    height: height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const stylesText = {
    position: "absolute",
    color: "white",
    fontSize: "20",
  };
  return (
    <View style={stylesContainer}>
      <Text style={stylesText}>Welcome to REACT NATIVE</Text>
    </View>
  );
}

export default Welcome;
