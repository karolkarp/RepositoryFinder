import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';
import { View, FlatList } from 'react-native';
import { Item, Icon, Input, Toast, Button, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';
import RepositoryListElement from '../Details/RepositoryListElement';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
	searchRepository: (repositoryName: string) => {};
	common: { processing: boolean };
	search: { repositoryList: object[] };
}

class SearchResult extends Component<Props> {
	constructor(props: Props) {
		super(props);

		this.handleInputSearch = this.handleInputSearch.bind(this);
	}

	handleInputSearch(e: React.FormEvent) {
		const { searchRepository } = this.props;
		const { text: repositoryName } = e.nativeEvent;
		if (repositoryName.length) {
			searchRepository(repositoryName);
		} else {
			Toast.show({
				text: 'Provide repository name',
			});
		}
	}

	componentDidUpdate() {
		console.log(this.props);
	}

	render() {
		const {
			common: { processing },
			search: { repositoryList },
		} = this.props;

		if (processing) {
			return <Spinner color="black" />;
		}

		return (
			<View style={style.mainView}>
				{repositoryList.length === 0 && (
					<View style={{ width: '100%', alignItems: 'center' }}>
						<Text>No results</Text>
					</View>
				)}
				<FlatList
					keyExtractor={(item: object) => item.id}
					data={repositoryList}
					renderItem={listItem => (
						<RepositoryListElement details={listItem.item} />
					)}
				/>
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNavigation(SearchResult));

const style = StyleSheet.create({
	mainView: {
		flex: 1,
		padding: 15,
	},
});
