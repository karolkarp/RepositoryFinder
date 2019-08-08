export function addNewList(addNew: boolean): object {
	return {
		type: 'SET_REPOSITORY_LIST',
		addNew,
	};
}
