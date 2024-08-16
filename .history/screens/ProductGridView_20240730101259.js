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
function ProductGridView(props) {
	const [products, setProducts] = useState([
		{
			id: 1,
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBI8Tt1SfuygU4nVyzUgu4usbdQrAHD3HwSw&s',
			name: 'Samsung SC6573',
			price: 75,
			describe: [
				'dry clean',
				'cyclone filter',
				'convenient cord storage',
			],
			like: false,
			rating: 5,
			viewer: 19,
		},
		{
			id: 2,
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MxwFrB10KmSMAGkEFwKK9H1BKFe4YzuH7A&s',
			name: 'LG VK69462KN',
			price: 88,
			describe: ['dry clean', 'cyclone filter', 'low energy consumption'],
			like: false,
			rating: 4,
			viewer: 15,
		},
		{
			id: 3,
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoABXYtJz3YZBFSvwvrjPugOX4F0SskdRAA&s',
			name: 'Thomas TWIN Panther',
			price: 88,
			describe: ['dry clean', 'cyclone filter', 'easy to clean'],
			like: true,
			rating: 3,
			viewer: 10,
		},
		{
			id: 4,
			url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74Kpy_1fy3iEZ9qS8_p_BjaiMRoZ-fuU56w&s',
			name: 'Samsung SC4520',
			price: 88,
			describe: ['dry clean', 'cyclone filter'],
			like: false,
			rating: 3,
			viewer: 8,
		},
	]);
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<FlatList />
		</View>
	);
}

export default ProductGridView;
