import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./data/reducer";
import initial from "./data/initial";
import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(
   reducer,
   initial,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
	<Provider store={ store }>
			<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
