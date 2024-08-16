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
	foodArr: [
		{
			name: 'La Casa Pizzeria Food Truck',
			status: 'OPENING SOON',
			price: '5$',
			typeFood: 'Pizza',
			website: 'lacasapizzeria.com',
		},
		{
			name: 'Maui Wowi Hawaiian',
			status: 'OPEN NOW',
			price: '5$',
			typeFood: 'Coffee, Beverage, Dessert',
			website: '',
		},
		{
			name: 'The Three Amigas',
			status: 'OPEN NOW',
			price: '5$',
			typeFood: 'Tacos',
			website: 'lacasapizzeria.com',
		},
		{
			name: 'Big Green Q',
			status: 'CLOSING SOON',
			price: '5$',
			typeFood: 'Beverage',
			website: 'biggreenq.com',
		},
	],
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
	const [show, setShow] = useState(true);

	useEffect(() => {
		Keyboard.addListener('keyboardDidShow', () => {
			setShow(false);
		});
		Keyboard.addListener('keyboardDidHide', () => {
			setShow(true);
		});
	});
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
				{show && (
					<>
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
					</>
				)}
			</View>
			<View style={{ height: 1, backgroundColor: '#ccc' }} />
			{/** Content */}
			<View style={{ flex: 65 }}>
				<ScrollView>
					{food.foodArr.map((item, index) => (
						<FoodItem key={index} data={item} />
					))}
				</ScrollView>
			</View>
			{/** Taskbar */}
			<View
				style={{
					flex: 10,
					flexDirection: 'row',
					width: '100%',
					alignItems: 'center',
					borderTopColor: '#ccc',
					borderTopWidth: 1,
				}}
			>
				<TouchableOpacity
					style={{
						width: '50%',
						alignItems: 'center',
						justifyContent: 'center',
						borderRightColor: '#ccc',
						borderRightWidth: 1,
						height: '100%',
					}}
				>
					<Icon name="map" size={30} />
					<Text style={{ fontSize: fontSize.h6, marginTop: 2 }}>
						Map View
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ width: '50%', alignItems: 'center' }}
				>
					<Icon name="bars" size={30} color={'red'} />
					<Text
						style={{
							fontSize: fontSize.h6,
							marginTop: 2,
							color: 'red',
						}}
					>
						List View
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default FoodList;
