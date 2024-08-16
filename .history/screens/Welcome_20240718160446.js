import React from "react";
import { Image, Text, View } from "react-native";
import image from "../public";

function Welcome(props) {
  const stylesContainer = {
    backgroundColor: "black",
    flex: 1,
  };

  const stylesText = {
    position: "absolute",
    color: "white",
    fontSize: 20,
  };
  return (
    <View style={stylesContainer}>
      <Text style={stylesText}>🔥Welcome to REACT NATIVE</Text>
      <Image source={require(image.default.helpIcon)} alt="" />
    </View>
  );
}

export default Welcome;
