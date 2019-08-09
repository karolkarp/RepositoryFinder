import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';
import { View, StatusBar } from 'react-native';
import { Item, Icon, Input, Toast, Button, Text } from 'native-base';
import SearchBar from '../Common/SearchBar';
import SearchResults from '../Common/SearchResults';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
	searchRepository: (repositoryName: string) => {};
	search: object;
}

class Home extends Component<Props> {
	constructor(props: Props) {
		super(props);
	}

	componentDidupdate(prevProps) {
		const {
			search: { repositoryList: prevRepositoryList },
		} = prevProps;
		const {
			search: { repositoryList },
		} = this.props;
	}

	render() {
		return (
			<View style={style.mainView}>
				<SearchBar />
				<SearchResults />
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNavigation(Home));

const style = StyleSheet.create({
	mainView: { flex: 1 },
});
