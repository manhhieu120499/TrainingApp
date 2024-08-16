import React from 'react';
import {Text} from 'react-native'


function MainScreen({x , y, person}) {
    const { name, age } = person;
    return (
        <>
            <Text>Welcome to the Main Screen {x} - {y}</Text>
            <Text>My name is {name} and I am {age} years old.</Text>
        </>
        
    )
}

export default MainScreen;