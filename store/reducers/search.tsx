/* eslint-disable indent */
interface Actions {
	type: string;
	repositoryList: object[];
	selectedRepository: object;
	repositoryName: string;
}

const initialState = {
	repositoryList: [],
	selectedRepository: {},
	repositoryName: '',
};

export const search = (state = initialState, action: Actions): object => {
	switch (action.type) {
		case 'SET_REPOSITORY_LIST':
			return {
				...state,
				repositoryList: action.repositoryList,
			};
		case 'SET_REPOSITORY_NAME':
			return {
				...state,
				repositoryName: action.repositoryName,
			};
		case 'SET_REPOSITORY':
			return {
				...state,
				selectedRepository: action.selectedRepository,
			};
		default:
			return state;
	}
};
