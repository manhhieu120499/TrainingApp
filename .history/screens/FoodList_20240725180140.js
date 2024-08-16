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
	ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors, images, fontSize } from '../constants';
import { FoodItem, SuggestFood } from '../components';

const FOOD_LIST = {
	foodItem: {},
	foodArr: [],
};

const ListSuggestFood = [
	{
		title: 'BBQ',
		src: images.bbq,
	},
	{
		title: 'Breakfast',
		src: images.bbq,
	},
	{
		title: 'Coffee',
		src: images.bbq,
	},
	{
		title: 'Desert',
		src: images.bbq,
	},
	{
		title: 'Hot Dogs',
		src: images.bbq,
	},
	{
		title: 'Noodles',
		src: images.bbq,
	},
];

function FoodList(props) {
	// list of food = state
	const [food, setFood] = useState(FOOD_LIST);
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
						<TouchableOpacity>
							<Icon name="search" size={20} />
						</TouchableOpacity>
						<TextInput
							placeholder="Search an food..."
							style={{
								width: '95%',
								overflow: 'hidden',
								height: 40,
								paddingStart: 10,
							}}
						/>
					</View>
					<TouchableOpacity>
						<Icon
							name="sliders-h"
							size={25}
							style={{ marginEnd: 20 }}
						/>
					</TouchableOpacity>
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
						marginHorizontal: 10,
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					{ListSuggestFood.map((typeFood) => (
						<SuggestFood
							key={typeFood.title}
							src={typeFood.src}
							title={typeFood.title}
						/>
					))}
				</View>
			</View>
			<View style={{ height: 1, backgroundColor: '#ccc' }} />
			{/** Content */}
			<View style={{ flex: 60 }}>
				<ScrollView>
					<FoodItem />
					<FoodItem />
					<FoodItem />
					<FoodItem />
				</ScrollView>
			</View>
			{/** Taskbar */}
			<View
				style={{
					flex: 15,
					backgroundColor: 'blue',
					flexDirection: 'row',
				}}
			>
				<TouchableOpacity>
					<Icon name="map" size={30} />
					<Text>Map View</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Icon name="bars" size={30} />
					<Text>List View</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default FoodList;
