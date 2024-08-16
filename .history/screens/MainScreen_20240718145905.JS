import React from "react";
import { Text, View, Dimensions } from "react-native";
import { Calculation } from "../utilities/Calculation";

function MainScreen({ x, y, person, products }) {
  const { width, height } = Dimensions.get("window");
  const stylesText = {
    color: "white",
  };

  const stylesContainer = {
    backgroundColor: "black",
    width: width,
    height: height,
    textAlign: "center",
  };
  const { name, age } = person;
  return (
    <View style={stylesContainer}>
      <Text style={stylesText}>
        Welcome to the Main Screen {x} - {y}
      </Text>
      <Text style={stylesText}>
        My name is {name} and I am {age} years old.
      </Text>
      <Text style={stylesText}>Danh sách sản phẩm</Text>
      {products.map((product, index) => (
        <Text key={index} style={stylesText}>
          {" "}
          productName: {product.productName} - price: {product.price} -
          quantity: {product.quantity}
        </Text>
      ))}
    </View>
  );
}

export default MainScreen;
