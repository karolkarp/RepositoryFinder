import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import {
	NavigationParams,
	NavigationScreenProp,
	NavigationState,
	withNavigation,
} from 'react-navigation';
import { View } from 'react-native';
import { Item, Icon, Input, Toast, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';
import styles from '../../styles';

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
	navigation: Navigation;
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
		return (
			<View style={{ padding: 15 }}>
				<Item rounded>
					<Icon name="ios-search" />
					<Input
						onSubmitEditing={this.handleInputSearch}
						placeholder="Search"
						onChange={this.handleInputValue}
						value={this.state.repositoryName}
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
)(withNavigation(SearchBar));

const style = StyleSheet.create({
	mainView: { flex: 1 },
	itemInput: { backgroundColor: styles.color.backgroundLight },
});
