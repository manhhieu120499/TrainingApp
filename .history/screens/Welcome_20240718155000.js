import React from "react";
import { Text, View } from "react-native";

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
      <Text style={stylesText}>Welcome to REACT NATIVE</Text>
    </View>
  );
}

export default Welcome;
