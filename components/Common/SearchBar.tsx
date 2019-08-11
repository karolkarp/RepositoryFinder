import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Item, Icon, Input, Toast, Button } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';

interface Props {
	searchRepository: (repositoryName: string) => {};
	addRepositoryList: (repositoryName: object[]) => {};
}
interface State {
	repositoryName: string;
}

class SearchBar extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			repositoryName: '',
		};

		this.handleInputSearch = this.handleInputSearch.bind(this);
		this.handleInputValue = this.handleInputValue.bind(this);
		this.handleResetButton = this.handleResetButton.bind(this);
	}

	handleInputSearch() {
		const { searchRepository } = this.props;
		const { repositoryName } = this.state;
		if (repositoryName.length) {
			searchRepository(repositoryName);
		} else {
			Toast.show({
				text: 'Provide repository name',
			});
		}
	}

	handleInputValue(e: { nativeEvent: { text: string } }) {
		const { text: repositoryName } = e.nativeEvent;
		this.setState({ repositoryName });
	}

	handleResetButton() {
		const repositoryName = '';
		const { addRepositoryList } = this.props;
		this.setState({ repositoryName });
		addRepositoryList([]);
	}

	render() {
		const { repositoryName } = this.state;

		return (
			<View style={style.mainView}>
				<Item rounded>
					<Icon name="ios-search" />
					<Input
						onSubmitEditing={this.handleInputSearch}
						placeholder="Search"
						onChange={this.handleInputValue}
						value={repositoryName}
					/>
					<Button transparent onPress={this.handleResetButton}>
						<Icon name="close" />
					</Button>
				</Item>
			</View>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SearchBar);

const style = StyleSheet.create({
	mainView: { padding: 15 },
	itemInput: { backgroundColor: styles.color.backgroundLight },
});
