import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";

const initial = {
    tasks: {
        1: {title: "task 1", notes: "task 1 notes, blah blah", dueDate: "2018-09-13"},
        2: {title: "task 2", notes: "task 2 notes, get a read of these", dueDate: "2018-09-13"},
        3: {title: "task 3", notes: "task 3 notes, yay lots of notes", dueDate: "2018-09-13"},
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        default: return state;
    }
}

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

let tasks = store.getState().tasks;

ReactDOM.render(
	<Provider store={ store }>
			<App />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
