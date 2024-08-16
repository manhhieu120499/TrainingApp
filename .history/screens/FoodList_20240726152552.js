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
	FlatList,
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
			socialNetwork: {
				facebook: 'http://facebook.com',
				instagram: 'http://instagram.com',
				twitter: 'http://twitter.com',
			},
			avatar: 'https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/cach_lam_banh_pizza_thom_ngon_chuan_nha_hang_2_43d4f180fd.png',
		},
		{
			name: 'Maui Wowi Hawaiian',
			status: 'OPEN NOW',
			price: '5$',
			typeFood: 'Coffee, Beverage, Dessert',
			website: '',
			socialNetwork: {
				facebook: 'http://facebook.com',
				twitter: 'http://twitter.com',
			},
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLjUIQoAYly5cvJjBLzZd-5-ojqD7cdISzw&s',
		},
		{
			name: 'The Three Amigas',
			status: 'OPEN NOW',
			price: '5$',
			typeFood: 'Tacos',
			website: 'lacasapizzeria.com',
			socialNetwork: {
				facebook: 'http://facebook.com',
				instagram: 'http://instagram.com',
				twitter: 'http://twitter.com',
			},

			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ645AOjMNWzCr1Ep8JbaMZuHXhIn0GV1abdA&s',
		},
		{
			name: 'Big Green Q',
			status: 'CLOSING SOON',
			price: '5$',
			typeFood: 'Beverage',
			website: 'biggreenq.com',
			socialNetwork: {
				facebook: 'http://facebook.com',
				instagram: 'http://instagram.com',
				twitter: 'http://twitter.com',
			},
			avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOK6i7KCvJzOV3rkhaqdeY1RI5bA0dtwjccA&s',
		},
	],
};

const ListSuggestFood = [
	{
		title: 'BBQ',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7oebasXErwqRgYwiYc7MNYqyXVSL1QAc-A&s',
	},
	{
		title: 'Breakfast',
		src: 'https://as2.ftcdn.net/v2/jpg/02/18/67/93/1000_F_218679362_O6HW7T5aiUcYiNuUcUDm91vmAzJsIFKX.jpg',
	},
	{
		title: 'Coffee',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyTCpAxP0hsJJ1wR1ZqjENDDTmcJakYPe2A&s',
	},
	{
		title: 'Desert',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMrmyYq7jybJGBax9rtDG1CmgWKkAC4pSEA&s',
	},
	{
		title: 'Hot Dogs',
		src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStZJUDCIOp8gHn5VDJL--JoYHYB1PAKqMBew&s',
	},
	{
		title: 'Noodles',
		src: 'https://img.freepik.com/premium-vector/noodles-icon-logo-vector-design-template_827767-66.jpg',
	},
];

function FoodList(props) {
	// list of food = state
	const [food, setFood] = useState(FOOD_LIST);
	const [show, setShow] = useState(true);
	const [active, setActive] = useState('List View');

	// useEffect(() => {
	// 	Keyboard.addListener('keyboardDidShow', () => {
	// 		setShow(false);
	// 	});
	// 	Keyboard.addListener('keyboardDidHide', () => {
	// 		setShow(true);
	// 	});
	// });

	const handleActiveButton = (titleBtn) => {
		setActive(titleBtn);
	};
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: 'white',
			}}
		>
			{/** Header */}
			<View style={{ flex: 15, backgroundColor: 'red' }}>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						marginTop: 10,
						height: 40,
					}}
				>
					{/**Search food */}
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							backgroundColor: '#ccc',
							width: '80%',
							paddingHorizontal: 15,
							marginStart: 20,
							borderRadius: 10,
							height: 40,
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
					<View style={{ height: 100, flex: 1 }}>
						<View
							style={{
								height: 1,
								width: '100%',
								backgroundColor: '#ccc',
								marginVertical: 5,
							}}
						/>
						<View
							style={{
								height: 80,
								// backgroundColor: 'red',
								flexDirection: 'row',
								marginHorizontal: 10,
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							{/* {ListSuggestFood.map((typeFood) => (
								<SuggestFood
									key={typeFood.title}
									src={typeFood.src}
									title={typeFood.title}
								/>
							))} */}
							<FlatList
								data={ListSuggestFood}
								renderItem={(typeFood) => (
									<SuggestFood
										src={typeFood.item.src}
										title={typeFood.item.title}
									/>
								)}
								keyExtractor={(item) => item.title}
								horizontal={true}
							/>
						</View>
					</View>
				)}
			</View>
			<View style={{ height: 1, backgroundColor: '#ccc' }} />
			{/** Content */}
			<View style={{ flex: 60 }}>
				{/* <ScrollView>
					{food.foodArr.map((item, index) => (
						<FoodItem key={index} data={item} />
					))}
				</ScrollView> */}
				<FlatList
					data={food.foodArr}
					renderItem={(item) => (
						<FoodItem
							data={item}
							onPress={() =>
								alert(`name of food is ${item.item.name}`)
							}
						/>
					)}
					keyExtractor={(eachFood) => eachFood.name}
				/>
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
					onPress={() => handleActiveButton('Map View')}
				>
					<Icon
						name="map"
						size={30}
						color={active === 'Map View' ? 'red' : null}
					/>
					<Text
						style={{
							fontSize: fontSize.h6,
							marginTop: 2,
							color: active === 'Map View' ? 'red' : null,
						}}
					>
						Map View
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ width: '50%', alignItems: 'center' }}
					onPress={() => handleActiveButton('List View')}
				>
					<Icon
						name="bars"
						size={30}
						color={active === 'List View' ? 'red' : null}
					/>
					<Text
						style={{
							fontSize: fontSize.h6,
							marginTop: 2,
							color: active === 'List View' ? 'red' : null,
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
