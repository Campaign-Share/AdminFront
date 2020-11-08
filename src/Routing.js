import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/loginContainer/LoginContainer';
import SuggestContainer from './containers/suggestContainer/SuggestContainer';
const Routing = () => {
	return (
		<Switch>
			<Route path="/" exact component={LoginContainer} />
            <Route path="/suggest" exact component={SuggestContainer}/>
		</Switch>
	);
};

export default Routing;
