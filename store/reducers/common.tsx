/* eslint-disable indent */
interface Actions {
	type: string;
	processing: boolean;
}

interface State {
	processing: boolean;
}

const initialState = {
	processing: false,
};

export const common = (
	state: object = initialState,
	action: Actions
): object => {
	switch (action.type) {
		case 'SET_LIST':
			return {
				...state,
				processing: action.processing,
			};
		default:
			return state;
	}
};
