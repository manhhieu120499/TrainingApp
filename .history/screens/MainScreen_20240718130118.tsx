import React from 'react';
import {Text} from 'react-native'

type Props = {
    x: number,
    y: number,
}

function MainScreen(props: Props) {
    return (
        <Text>Welcome to the Main Screen {props.x} - {props.y}</Text>
    )
}

export default MainScreen;