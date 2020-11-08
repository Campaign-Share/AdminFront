import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/loginContainer/LoginContainer';
const Routing = () => {
	return (
		<Switch>
			<Route path="/" exact component={LoginContainer} />
		</Switch>
	);
};

export default Routing;
