import React from 'react';
import PropTypes from 'prop-types';
import './ProjectCard.css';
import repoIcon from '../images/repoIcon.png';

function ProjectCard({ project }) {
  const {
    thumb, link, title, area, stacks, site,
  } = project;
  return (
    <div
      className="project-card-container"
      style={{
        background: `url(${thumb}) center center / cover`,
      }}
    >
      <div className="project-card-title-container">
        <h3>{title}</h3>
        <div>
          <a href={link} target="_blank" rel="noreferrer">
            <img width="20" src={repoIcon} alt="Repo icon" />
            Repo
          </a>
          { !site ? null : (
            <a href={site} target="_blank" rel="noreferrer">
              <img width="20" src={repoIcon} alt="Repo icon" />
              App
            </a>
          )}
        </div>
      </div>
      <div className="project-card-stacks-container">
        <h4>
          Projeto
          {' '}
          {area}
        </h4>
        <h5>Tecnologias utilizadas:</h5>
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
