import React, { Component } from 'react';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';
import Head from '../Common/Head';
import { View, StatusBar } from 'react-native';
import { Text, Header, Body, Title } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
}

class Details extends Component<Props> {
	render() {
		return (
			<View style={{ flex: 1 }}>
				<StatusBar
					backgroundColor={styles.color.background}
					barStyle="light-content"
				/>
				<Head />
				<View style={{ flex: 1, backgroundColor: styles.color.background }}>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
				</View>
				<View style={{ flex: 5 }}>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
					<Text>{'asdasdassdasd'}</Text>
				</View>
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNavigation(Details));
