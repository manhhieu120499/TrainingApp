import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Welcome(props) {
  const stylesContainer = {
    backgroundColor: "white",
    flex: 100,
  };

  const stylesText = {
    color: "black",
    fontSize: 20,
  };

  const stylesButton = {
    width: "90%",
    height: 50,
    background: "transparent",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
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
          <View style={{ height: 110 }} />
          <View
            style={{
              height: 100,
              backgroundColor: "blue",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", marginBottom: 5 }}>Welcome to</Text>
            <Text style={{ color: "white", marginBottom: 8, fontSize: 18 }}>
              BADMINTON_COMPANY.CO!
            </Text>
            <Text style={{ color: "white" }}>
              Please select your account type
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <TouchableOpacity style={stylesButton}>
              <Text style={{ color: "white" }}>Badminton user</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesButton}>
              <Text style={{ color: "white" }}>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity style={stylesButton}>
              <Text style={{ color: "white" }}>Individual</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/** footer */}
        <View
          style={{
            flex: 25,
            width: "100%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity style={stylesButton}>
            <Text style={{ color: "white" }}>Next</Text>
          </TouchableOpacity>
          <Text style={{ color: "white", marginTop: 15 }}>
            Don't know what account type to use ?
          </Text>
          <Text style={{ color: "rgba(255, 255, 255, 0.5)", marginTop: 8 }}>
            Check out our post
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Welcome;
