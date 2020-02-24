import React from 'react';

import { PageTitle } from './components/PageTitle.js';
import { ProjectTile } from './components/ProjectTile.js';
import Projects from './projects.js';

export class ProjectsPage extends React.Component {
	render() {
		const projectTiles = Projects.map(p => {
			return <ProjectTile projectInfo={p} />
		});
		return (
			<div>
				<PageTitle pageTitle="Projects" />
				<div className="catalog">{projectTiles}</div>
			</div>
		);
	}
}
