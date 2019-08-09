import config from './config';

const Api = {
	getRepositories: (repositoryName: string) =>
		config.apiRoute(`?q=${repositoryName}`),
};

export default Api;
