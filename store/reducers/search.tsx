/* eslint-disable indent */
interface Actions {
	type: string;
	repositoryList: object[] | null;
	selectedRepository: object;
}

const initialState = {
	repositoryList: null,
	selectedRepository: {},
};

export const search = (state = initialState, action: Actions): object => {
	switch (action.type) {
		case 'SET_REPOSITORY_LIST':
			return {
				...state,
				repositoryList: action.repositoryList,
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
