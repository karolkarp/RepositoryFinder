import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, FlatList } from 'react-native';
import { Toast, Text, Spinner, Item } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import RepositoryListElement from '../Details/RepositoryListElement';

interface Props {
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
				{repositoryList && repositoryList.length === 0 && (
					<View style={style.noResults}>
						<Text>No results</Text>
					</View>
				)}
				<FlatList
					keyExtractor={(item: object) => item.id.toString()}
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
)(SearchResult);

const style = StyleSheet.create({
	mainView: {
		flex: 1,
		padding: 15,
	},
	noResults: { width: '100%', alignItems: 'center' },
});
