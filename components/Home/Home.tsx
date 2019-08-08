import React, { Component, Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../store/mapToProps';

interface Props {}
interface State {}

class Home extends Component {
	constructor(props: Props) {
		super(props);
	}

	render() {
		return <Fragment />;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withNavigation(Home));

const styles = StyleSheet.create({});
