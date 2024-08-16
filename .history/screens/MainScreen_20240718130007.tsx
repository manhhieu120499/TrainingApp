import React from 'react';
import {Text} from 'react-native'

function MainScreen(props){
    return (
        <Text>Welcome to the Main Screen {props.x} - {props.y}</Text>
    )
}

export default MainScreen;