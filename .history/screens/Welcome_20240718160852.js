import React from "react";
import { Image, Text, View } from "react-native";

function Welcome(props) {
  const stylesContainer = {
    backgroundColor: "black",
    flex: 1,
  };

  const stylesText = {
    color: "white",
    fontSize: 20,
    display: "inline-block",
  };
  return (
    <View style={stylesContainer}>
      <Text style={stylesText}>🔥Welcome to REACT NATIVE</Text>
      <Image
        source={require("../public/img/help.png")}
        alt=""
        style={{
          width: 20,
          height: 20,
          backgroundColor: "red",
        }}
      />
    </View>
  );
}

export default Welcome;
