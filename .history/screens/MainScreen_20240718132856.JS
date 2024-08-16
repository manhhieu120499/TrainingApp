import React from 'react';
import {Text} from 'react-native'
import { View } from 'react-native';

function MainScreen({x , y, person, products}) {
    const { name, age } = person;
    return (
        <View style={{backgroundColor:'black'}}>
            <Text style={{color:'white'}}>Welcome to the Main Screen {x} - {y}</Text>
            <Text style={{color:'white'}}>My name is {name} and I am {age} years old.</Text>
            <Text style={{color:'white'}}>Danh sách sản phẩm</Text>
                {products.map((product, index) => <Text key={index} style={{color:'white'}}>   productName: {product.productName} -     
                price: {product.price} -
                quantity: {product.quantity}</Text>)}
        </View>  
    )
}

export default MainScreen;