import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Root } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import { store, persistor } from './store';

const App = () => {
	return (
		<Fragment>
			<SafeAreaView style={styles.SafeAreaView}>
				<PersistGate loading={null} persistor={persistor}>
					<Provider store={store}>
						<Root>
							<Routes />
						</Root>
					</Provider>
				</PersistGate>
			</SafeAreaView>
		</Fragment>
	);
};

const styles = StyleSheet.create({
	SafeAreaView: {
		flex: 1,
	},
});

export default App;
