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
	Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, images, fontSize } from '../constants';
import { SuggestFood } from '../components';

const FOOD_LIST = {
	foodItem: {},
	foodArr: [],
};

function FoodList(props) {
	// list of food = state
	const [foods, setFoods] = useState(FOOD_LIST);
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
			}}
		>
			{/** Header */}
			<View style={{ flex: 20 }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 10,
						flex: 30,
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: '#ccc',
							width: '80%',
							paddingHorizontal: 15,
							marginStart: 20,
							borderRadius: 10,
						}}
					>
						<Icon name="search" size={20} />
						<TextInput
							placeholder="Search an food..."
							style={{ width: '95%', overflow: 'hidden' }}
						/>
					</View>
					<Icon
						name="sliders-h"
						size={20}
						style={{ marginEnd: 20 }}
					/>
				</View>
				<View
					style={{
						height: 1,
						width: '100%',
						backgroundColor: '#ccc',
						marginVertical: 10,
					}}
				/>
				<View
					style={{
						flex: 50,
						flexDirection: 'row',

						marginHorizontal: 20,
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<SuggestFood src={images.bbq} title="BBQ" />
					<SuggestFood src={images.bbq} title="BBQ" />
					<SuggestFood src={images.bbq} title="BBQ" />
					<SuggestFood src={images.bbq} title="BBQ" />
					<SuggestFood src={images.bbq} title="BBQ" />
				</View>
			</View>
			{/** Content */}
			<View style={{ flex: 60, backgroundColor: 'green' }}></View>
			{/** Taskbar */}
			<View style={{ flex: 15, backgroundColor: 'blue' }}></View>
		</View>
	);
}

export default FoodList;
