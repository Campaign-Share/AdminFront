import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import rootReducer from './modules/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
	// <Provider >
		<App />
	// </Provider>
	,
	document.querySelector('#root'),
);
