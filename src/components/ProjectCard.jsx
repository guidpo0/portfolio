import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ project }) {
  const {
    thumb, link, title, area, stacks,
  } = project;
  return (
    <div style={{ backgroundImage: `url(${thumb})` }}>
      <div>
        <h5>{title}</h5>
        <a href={link}>Repo</a>
      </div>
      <div>
        <h6>{area}</h6>
        <h6>Stacks:</h6>
        <div>
          { stacks.map((stack) => (<p>{stack}</p>))}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape(PropTypes.any).isRequired,
};

export default ProjectCard;
