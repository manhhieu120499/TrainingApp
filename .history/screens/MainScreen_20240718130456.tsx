import React from 'react';
import {Text} from 'react-native'

type Props = {
    x: string,
    y: string,
}

function MainScreen(props: Props) {
    return (
        <Text>Welcome to the Main Screen</Text>
    )
}

export default MainScreen;