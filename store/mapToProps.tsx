import * as commonActions from './actions/common';
import * as searchActions from './actions/search';

export const mapDispatchToProps = (dispatch: object): object => {
	return {
		setLoader: (processing: boolean): void =>
			dispatch(commonActions.setLoader(processing)),
		setSearchResult: (addNew: boolean = true): void =>
			dispatch(searchActions.setSearchResult(addNew)),
	};
};

export const mapStateToProps = (state: object): object => {
	return state;
};
