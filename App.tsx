import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { Root } from 'native-base';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Routes from './components/Routes';
import { store, persistor } from './store';
import styles from './styles';

const App = () => {
	return (
		<Fragment>
			<StatusBar
				backgroundColor={styles.color.background}
				barStyle="light-content"
			/>
			<SafeAreaView style={style.SafeAreaView}>
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

const style = StyleSheet.create({
	SafeAreaView: {
		flex: 1,
	},
});

export default App;
