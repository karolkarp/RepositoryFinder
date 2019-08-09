import React, { Component } from 'react';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';
import Head from '../Common/Head';
import { View, StatusBar } from 'react-native';
import { Text, List, ListItem, Title } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
	search: { selectedRepository: object };
}

class Details extends Component<Props> {
	render() {
		const {
			search: { selectedRepository },
		} = this.props;

		console.log(selectedRepository);
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
					<List>
						{/* <ListItem> */}
						<View
							style={{
								flexDirection: 'row',
								flexWrap: 'wrap',
							}}
						>
							<View
								style={{
									flex: 1,
									borderColor: styles.color.details,
									borderWidth: 1,
									alignItems: 'center',
								}}
							>
								<Text>{selectedRepository.stargazers_count}</Text>
								<Text>{'Stargazers'}</Text>
							</View>
							<View
								style={{
									flex: 1,
									borderColor: styles.color.details,
									borderWidth: 1,
									alignItems: 'center',
								}}
							>
								<Text>{selectedRepository.watchers}</Text>
								<Text>{'Watchers'}</Text>
							</View>
							<View
								style={{
									flex: 1,
									borderColor: styles.color.details,
									borderWidth: 1,
									alignItems: 'center',
								}}
							>
								<Text>{selectedRepository.forks}</Text>
								<Text>{'Forks'}</Text>
							</View>
						</View>
						{/* </ListItem> */}
						<ListItem itemDivider />
						<ListItem>
							<Text>Ali Connors</Text>
						</ListItem>
						<ListItem itemDivider />
						<ListItem>
							<Text>Bradley Horowitz</Text>
						</ListItem>
					</List>
				</View>
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNavigation(Details));
