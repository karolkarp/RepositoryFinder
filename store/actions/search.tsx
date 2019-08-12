import { Toast } from 'native-base';
import consts from '../../consts';
import AuthService from '../../AuthService';
import Api from '../../Api';
import * as commonActions from '../actions/common';

const Auth = new AuthService();

export function addRepositoryList(repositoryList: object[] | null): object {
	return {
		type: 'SET_REPOSITORY_LIST',
		repositoryList,
	};
}

export function setRepositoryDetails(selectedRepository: object): object {
	return {
		type: 'SET_REPOSITORY',
		selectedRepository,
	};
}

export function searchRepository(repositoryName: string) {
	return async (dispatch: object) => {
		try {
			dispatch(commonActions.setLoader(true));
			const { SUCCESS } = consts;
			const { status, body } = await Auth.fetch(
				Api.getRepositories(repositoryName)
			);
			if (status === SUCCESS) {
				dispatch(addRepositoryList(body.items));
			} else {
				Toast.show({
					text: 'Repository not found',
				});
			}

			dispatch(commonActions.setLoader(false));
		} catch (e) {
			console.error(e);
			Toast.show({
				text: 'An error occured',
			});
		}
	};
}
