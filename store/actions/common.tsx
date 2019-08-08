export function setLoader(processing: boolean): object {
	return {
		type: 'SET_LOADER',
		processing,
	};
}
