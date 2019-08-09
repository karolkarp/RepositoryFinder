import * as commonActions from './actions/common';
import * as searchActions from './actions/search';

export const mapDispatchToProps = (dispatch: object): object => {
	return {
		setLoader: (processing: boolean) =>
			dispatch(commonActions.setLoader(processing)),
		searchRepository: (repositoryName: string) =>
			dispatch(searchActions.searchRepository(repositoryName)),
		addRepositoryList: (repositoryList: object[]) =>
			dispatch(searchActions.addRepositoryList(repositoryList)),
		setRepositoryDetails: (selectedRepository: object) =>
			dispatch(searchActions.setRepositoryDetails(selectedRepository)),
		setRepositoryName: (repositoryName: string) =>
			dispatch(searchActions.setRepositoryName(repositoryName)),
	};
};

export const mapStateToProps = (state: object): object => {
	return state;
};
