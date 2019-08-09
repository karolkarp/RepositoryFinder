import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home/Home';
import Details from '../components/Details/Details';

const stackNavigator = createStackNavigator(
	{
		Home,
		Details,
	},
	{
		initialRouteName: 'Details',
		headerMode: 'none',
	}
);

const Routes = createAppContainer(stackNavigator);

export default Routes;
