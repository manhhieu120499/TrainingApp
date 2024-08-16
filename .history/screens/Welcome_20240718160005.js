import React from "react";
import { Image, Text, View } from "react-native";
import image from "../public";

function Welcome(props) {
  const stylesContainer = {
    backgroundColor: "white",
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
      <Image src={image.helpIcon} alt="" />
    </View>
  );
}

export default Welcome;
