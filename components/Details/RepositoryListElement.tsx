import React from 'react';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon, Thumbnail } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
	setRepositoryDetails: () => {};
	details: {
		name: string;
		description: string;
		stargazers_count: number;
		forks_count: number;
		owner: {
			avatar_url: string;
			login: string;
		};
	};
}

function RepositoryListElement(props: Props) {
	const {
		details: {
			name,
			description,
			stargazers_count,
			forks_count,
			owner: { avatar_url, login },
		},
	} = props;

	const handleDetails = () => {
		const { details, navigation, setRepositoryDetails } = props;
		setRepositoryDetails(details);
		navigation.navigate('Details');
	};

	return (
		<TouchableOpacity onPress={handleDetails}>
			<View style={style.mainView}>
				<View style={style.leftView}>
					{avatar_url == '' && <Text style={style.noImage}>No image</Text>}
					{avatar_url && (
						<Thumbnail style={style.image} source={{ uri: avatar_url }} />
					)}
				</View>
				<View style={style.rightView}>
					<View style={style.mainTitle}>
						<Text style={style.title}>{name}</Text>
					</View>
					<Text style={style.description}>{description}</Text>
					<View style={style.detailView}>
						<Icon style={style.icon} type="SimpleLineIcons" name="star" />
						<Text style={style.detailInfo}>{stargazers_count}</Text>
						<Icon style={style.icon} type="SimpleLineIcons" name="clock" />
						<Text style={style.detailInfo}>{forks_count}</Text>
						<Icon style={style.icon} type="SimpleLineIcons" name="user" />
						<Text style={style.detailInfo}>{login}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNavigation(RepositoryListElement));

const style = StyleSheet.create({
	mainView: {
		flexDirection: 'row',
	},
	leftView: {
		flex: 0.8,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	rightView: {
		flex: 5,
		padding: 5,
		borderBottomColor: styles.color.details,
		borderBottomWidth: 1,
		marginBottom: 10,
	},
	noImage: {
		fontSize: 10,
		alignSelf: 'center',
		marginTop: 30,
	},
	image: {
		height: 40,
		width: 40,
		alignSelf: 'flex-start',
		justifyContent: 'flex-start',
	},
	title: {
		fontFamily: 'Roboto-Medium',
		fontSize: 14,
		paddingBottom: 10,
		marginTop: -5,
		color: 'black',
	},
	description: {
		fontFamily: 'Roboto-Light',
		fontSize: 10,
	},
	mainTitle: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
	},
	detailView: {
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between',
		padding: 10,
		paddingRight: '30%',
	},
	icon: {
		color: styles.color.details,
		fontSize: 14,
	},
	detailInfo: {
		color: styles.color.details,
		fontSize: 12,
	},
});
