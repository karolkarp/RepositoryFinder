import React, { Component } from 'react';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';
import Head from '../Common/Head';
import { View, StatusBar, StyleSheet, Image } from 'react-native';
import { Text, List, ListItem, Icon } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
	search: {
		selectedRepository: {
			name: string;
			description: string;
			stargazers_count: number;
			forks_count: number;
			watchers: number;
			forks: number;
			private: boolean;
			open_issues: number;
			language: string;
			default_branch: string;
			owner: {
				avatar_url: string;
				login: string;
			};
		};
	};
}

class Details extends Component<Props> {
	render() {
		const {
			search: { selectedRepository },
		} = this.props;
		const {
			name,
			description,
			stargazers_count,
			open_issues,
			watchers,
			forks,
			language,
			private: isPrivate,
			default_branch,
			owner: { avatar_url },
		} = selectedRepository;

		return (
			<View style={style.mainView}>
				<StatusBar
					backgroundColor={styles.color.background}
					barStyle="light-content"
				/>
				<Head />
				<View style={style.headerContent}>
					<Image style={style.image} source={{ uri: avatar_url }} />
					<Text style={style.headerTitle}>{name}</Text>
					<Text style={style.headerSubtitle}>{description}</Text>
				</View>
				<View style={style.detailsView}>
					<List>
						<View style={style.listSection}>
							<View style={style.detailItems}>
								<Text style={{ color: styles.color.font }}>
									{stargazers_count}
								</Text>
								<Text>{'Stargazers'}</Text>
							</View>
							<View style={style.detailItems}>
								<Text style={{ color: styles.color.font }}>{watchers}</Text>
								<Text>{'Watchers'}</Text>
							</View>
							<View style={style.detailItems}>
								<Text style={{ color: styles.color.font }}>{forks}</Text>
								<Text>{'Forks'}</Text>
							</View>
						</View>
						<ListItem itemDivider />
						<View style={style.listSection}>
							<View style={style.listItem}>
								<Icon
									type="SimpleLineIcons"
									name="key"
									style={style.listIcon}
								/>
								<Text>{isPrivate ? 'Private' : 'Public'}</Text>
							</View>
							<View style={style.listItem}>
								<Icon
									type="SimpleLineIcons"
									name="layers"
									style={style.listIcon}
								/>
								<Text>{language}</Text>
							</View>
						</View>
						<ListItem itemDivider />
						<View style={style.listSection}>
							<View style={style.listItem}>
								<Icon
									type="SimpleLineIcons"
									name="list"
									style={style.listIcon}
								/>
								<Text>{open_issues}</Text>
								<Text>{' Issues'}</Text>
							</View>
							<View style={style.listItem}>
								<Icon
									type="SimpleLineIcons"
									name="fire"
									style={style.listIcon}
								/>
								<Text>{'Branch: '}</Text>
								<Text>{default_branch}</Text>
							</View>
						</View>
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

const style = StyleSheet.create({
	mainView: { flex: 1 },
	detailsView: { flex: 4 },
	headerContent: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: styles.color.background,
	},
	headerTitle: { fontSize: 20, color: 'white' },
	headerSubtitle: {
		fontSize: 16,
		color: styles.color.font,
		padding: 10,
		textAlign: 'center',
	},
	image: {
		height: 80,
		width: 80,
		borderColor: 'white',
		borderWidth: 3,
		borderRadius: 40,
	},
	listSection: {
		display: 'flex',
		flexDirection: 'row',
	},
	detailItems: {
		flex: 1,
		borderColor: styles.color.details,
		borderWidth: 1,
		alignItems: 'center',
	},
	listItem: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		borderColor: styles.color.details,
		borderWidth: 1,
	},
	listIcon: {
		color: styles.color.font,
		fontSize: 20,
		padding: 10,
		paddingLeft: 25,
	},
});
