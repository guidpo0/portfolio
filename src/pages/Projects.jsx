import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Projects.css';
import projectsInfo from '../data/projectsInfo';
import ProjectsFilter from '../components/ProjectsFilter';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [filters, setFilters] = useState({
    area: '',
    stacks: [],
  });

  function selectProjects({ target }) {
    const { classList: { value } } = target;
    if (!value.includes('btn-project-active')) {
      const projectsButtons = document.querySelectorAll('.btn-projects');
      projectsButtons.forEach((button) => {
        const { classList } = button;
        classList.value = classList.value.includes('btn-project-active')
          ? 'btn-projects' : 'btn-projects btn-project-active';
      });
      setShowAllProjects(!showAllProjects);
    }
  }

  function filterProjects() {
    const { area, stacks } = filters;
    let filteredProjects = [...projectsInfo];
    if (!showAllProjects) {
      filteredProjects = filteredProjects.filter(({ highlight }) => highlight);
    }
    if (area !== '') {
      filteredProjects = filteredProjects.filter((project) => project.area === area);
    }
    if (stacks.length !== 0) {
      filteredProjects = filteredProjects.filter((project) => {
        let projectIsValid = false;
        project.stacks.forEach((stack) => {
          if (stacks.includes(stack)) projectIsValid = true;
        });
        return projectIsValid;
      });
    }
    return filteredProjects.sort(() => Math.random() - 0.5);
  }

  return (
    <>
      <Header />
      <main className="projects-page-container">
        <h1>Meus projetos</h1>
        <div className="container-btn-project">
          <button
            type="button"
            className="btn-projects btn-project-active"
            onClick={selectProjects}
          >
            Destaques
          </button>
          <button
            type="button"
            className="btn-projects"
            onClick={selectProjects}
          >
            Todos
          </button>
        </div>
        <ProjectsFilter filters={filters} setFilters={setFilters} />
        <div className="projects">
          {
            filterProjects().map((project) => (<ProjectCard project={project} />))
          }
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
