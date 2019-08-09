import Config from 'react-native-config';

const { REACT_APP_STAGE, LOCAL_IP_ADRESS, PRODUCTION_ADDRESS } = Config;

const API_PATH_DEV = `${LOCAL_IP_ADRESS}search/repositories`;
const API_PATH_PROD = `${PRODUCTION_ADDRESS}search/repositories`;

const dev = {
	apiRoute: path => {
		return path !== undefined ? API_PATH_DEV + path : API_PATH_DEV;
	},
};

const prod = {
	apiRoute: path => {
		return path !== undefined ? API_PATH_PROD + path : API_PATH_PROD;
	},
};

const config = REACT_APP_STAGE === 'prod' ? prod : dev;
export default config;
