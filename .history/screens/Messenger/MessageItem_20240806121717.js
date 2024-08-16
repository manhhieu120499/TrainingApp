import { View, Text, Image } from 'react-native';
import { fontSize } from '../../constants';

function MessageItem(props) {
	return (
		<View>
			<Image />
			<Text
				style={{
					paddingVertical: 10,
					paddingHorizontal: 5,
					fontSize: fontSize.h4,
					color: 'black',
				}}
			></Text>
		</View>
	);
}

export default MessageItem;
pr < View > ops;
