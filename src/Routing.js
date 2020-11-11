import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginContainer from './containers/loginContainer/LoginContainer';
import SuggestContainer from './containers/suggestContainer/SuggestContainer';
import ReportContainer from './containers/reportContainer/ReportContainer';
import CertifyContainer from './containers/certifyContainer/CertifyContainer'; 

const Routing = () => {
	return (
		<Switch>
			<Route path="/" exact component={LoginContainer} />
            <Route path="/suggest" exact component={SuggestContainer}/>
			<Route path="/report" exact component={ReportContainer}/>
			<Route path="/certify" exact component={CertifyContainer}/>
		</Switch>
	);
};

export default Routing;
