import React, { useEffect, useRef, useState } from 'react';
import {
	Text,
	ImageBackground,
	View,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, images } from '../constants';

function FoodList(props) {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
			}}
		>
			{/** Header */}
			<View style={{ flex: 15, backgroundColor: 'red' }}>
				<View style={{ width: '100%' }}>
					<View
						style={{ flexDirection: 'row', alignItems: 'center' }}
					>
						<Icon name="search" size={20} />
						<TextInput
							placeholder="Search an food..."
							style={{ backgroundColor: 'pink' }}
						/>
					</View>
					<Icon name="sliders-h" size={20} />
				</View>
			</View>
			{/** Content */}
			<View style={{ flex: 70, backgroundColor: 'green' }}></View>
			{/** Taskbar */}
			<View style={{ flex: 15, backgroundColor: 'blue' }}></View>
		</View>
	);
}

export default FoodList;
