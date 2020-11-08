import React from 'react';
import Routing from './Routing.js';
import GlobalStyle from './GlobalStyle.js';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	return (
		<Router>
			<GlobalStyle />
			<Routing />
		</Router>
	);
};
export default App;
