import React from "react";
import { Text } from "react-native";
import { View } from "react-native";

function MainScreen({ x, y, person, products }) {
  const stylesText = {
    color: "red",
  };

  const stylesContainer = {
    backgroundColor: "black",
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
