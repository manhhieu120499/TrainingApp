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
  };
  return (
    <View style={stylesContainer}>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={stylesText}>🔥Welcome to REACT NATIVE</Text>
        <Image
          source={require("../public/img/help.png")}
          alt=""
          style={{
            width: 20,
            height: 20,
            backgroundColor: "white",
          }}
        />
      </View>
    </View>
  );
}

export default Welcome;
