import { View, Text, ImageBackground } from 'react-native';

function Profile(props) {
	return (
		<View style={{ flex: 1, backgroundColor: 'green' }}>
			<View style={{ height: 180, backgroundColor: 'red' }}>
				<ImageBackground />
			</View>
		</View>
	);
}

export default Profile;
