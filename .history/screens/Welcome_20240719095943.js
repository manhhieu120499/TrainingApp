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
        {/**content */}
        <View style={{ flex: 60, width: "100%", backgroundColor: "green" }}>
          <View style={{ height: 70 }} />
          <View
            style={{
              height: 100,
              backgroundColor: "blue",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Welcome to</Text>
            <Text>BADMINTON_COMPANY.CO!</Text>
            <Text>Please select your account type</Text>
          </View>
        </View>
        {/** footer */}
        <View
          style={{ flex: 25, width: "100%", backgroundColor: "yellow" }}
        ></View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;
