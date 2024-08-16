import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

function Welcome(props) {
  const stylesContainer = {
    backgroundColor: "white",
    flex: 100,
  };

  const stylesText = {
    color: "black",
    fontSize: 20,
  };
  return (
    <View style={stylesContainer}>
      <ImageBackground
        source={require("../public/img/background.jpeg")}
        resizeMethod="cover"
        style={{ flex: 100 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 5,
            backgroundColor: "red",
            flex: 5,
          }}
        >
          <Text style={stylesText}>🔥 BADMINTON_COMPANY.CO</Text>
          <Image
            source={require("../public/img/help.png")}
            alt=""
            style={{
              width: 20,
              height: 20,
              background: "none",
            }}
          />
        </View>
        {/**khoảng trống */}
        <View style={{ flex: 50, width: "100%", backgroundColor: "green" }} />
        {/** content */}
        <View
          style={{ flex: 35, width: "100%", backgroundColor: "yellow" }}
        ></View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;
