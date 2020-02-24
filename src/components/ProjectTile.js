import React from 'react';
import PropTypes from 'prop-types';

export class ProjectTile extends React.Component {
	render() {
		const { image, link, name, description,
				startDate, endDate } = this.props.projectInfo;
		return (
			<div className="tile">
				<div>{name}</div>
				<div>
					<span>{startDate}</span> - <span>{endDate}</span>
				</div>
				<img src={image} alt={name + ' image'} />
				<div>{description}</div>
				<a href={link}>View Project</a>
			</div>
		)
	}
}

ProjectTile.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
};
