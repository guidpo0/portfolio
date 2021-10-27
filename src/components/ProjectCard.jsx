import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import repoIcon from '../images/repoIcon.png';

function ProjectCard({ project }) {
  const {
    thumb, link, title, area, stacks,
  } = project;
  return (
    <div
      className="project-card-container"
      style={{
        background: `url(${thumb})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="project-card-title-container">
        <h3>{title}</h3>
        <a href={link} target="_blank" rel="noreferrer">
          <img width="20" src={repoIcon} alt="Repo icon" />
          Repo
        </a>
      </div>
      <div className="project-card-stacks-container">
        <h4>
          Projeto
          {' '}
          {area}
        </h4>
        <h5>Stacks:</h5>
        <div>
          { stacks.map((stack) => (<h6>{stack}</h6>))}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape(PropTypes.any).isRequired,
};

export default ProjectCard;
