import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
} from "react-router-dom";
import './App.css'
import { HomePage } from './HomePage.js';
import { ProjectsPage } from './ProjectsPage.js';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<nav className="navbar">
					<Link to="/">Home</Link>
					<Link to="/projects">Projects</Link>
				</nav>
				<div className="container">
					<Switch>
						<Route path="/projects">
							<ProjectsPage />
						</Route>
						<Route path="/">
							<HomePage />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}
