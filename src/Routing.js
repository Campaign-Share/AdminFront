import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/loginContainer/LoginContainer';
import SuggestContainer from './containers/suggestContainer/SuggestContainer';
import ReportContainer from './containers/reportContainer/ReportContainer';
const Routing = () => {
	return (
		<Switch>
			<Route path="/" exact component={LoginContainer} />
            <Route path="/suggest" exact component={SuggestContainer}/>
			<Route path="/report" exact component={ReportContainer}/>
			
		</Switch>
	);
};

export default Routing;
