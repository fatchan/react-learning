import React from 'react';
import { PageTitle } from './components/PageTitle.js';

export class HomePage extends React.Component {
	render() {
		return (
			<div>
				<PageTitle pageTitle="Home" />
				<p>Hello, world!</p>
			</div>
		);
	}
}
