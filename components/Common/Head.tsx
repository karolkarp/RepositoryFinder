import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';

import { Header, Left, Icon, Body } from 'native-base';
import styles from '../../styles';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
}

function Head(props: Props) {
	const { navigation } = props;
	return (
		<View>
			<Header style={{ backgroundColor: styles.color.background }}>
				<Left>
					<Icon
						type="MaterialCommunityIcons"
						name="arrow-left"
						style={style.iconBack}
						onPress={() => navigation.goBack()}
					/>
				</Left>
				<Body />
			</Header>
		</View>
	);
}

export default withNavigation(Head);

const style = StyleSheet.create({
	iconBack: { color: '#fff', zIndex: 1 },
});
