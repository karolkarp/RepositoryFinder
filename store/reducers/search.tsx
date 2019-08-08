/* eslint-disable indent */
interface Actions {
	type: string;
	repositoryList: object[];
}

const initialState = {
	repositoryList: [],
};

export const search = (state = initialState, action: Actions): object => {
	switch (action.type) {
		case 'SET_REPOSITORY_LIST':
			return {
				...state,
				repositoryList: action.repositoryList,
			};
		default:
			return state;
	}
};
