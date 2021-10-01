import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './global-styles';
import App from './app';

ReactDOM.render(
	<>
		<GlobalStyle />
		<App />
	</>,
	document.getElementById('root')
);
