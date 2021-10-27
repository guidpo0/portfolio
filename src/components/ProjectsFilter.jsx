import React from 'react';
import PropTypes from 'prop-types';
import stacksData from '../data/stacks.json';

function ProjectsFilter({ filters, setFilters }) {
  const { stacks } = filters;

  function setAreaFilter({ target: { value } }) {
    setFilters({
      area: value,
      stacks,
    });
  }

  function setStacksFilter({ target: { value, checked } }) {
    if (checked) {
      setFilters({
        ...filters,
        stacks: [...stacks, value],
      });
    } else {
      setFilters({
        ...filters,
        stacks: stacks.filter((stack) => stack !== value),
      });
    }
  }

  return (
    <div>
      <h3>Filtrar por:</h3>
      <div>
        <h4>Área</h4>
        <label htmlFor="everything">
          <input
            type="radio"
            id="everything"
            value=""
            name="area-type"
            onClick={setAreaFilter}
            defaultChecked
          />
          Todas
        </label>
        <label htmlFor="front-end">
          <input
            type="radio"
            id="front-end"
            value="front-end"
            name="area-type"
            onClick={setAreaFilter}
          />
          Front-End
        </label>
        <label htmlFor="back-end">
          <input
            type="radio"
            id="back-end"
            value="back-end"
            name="area-type"
            onClick={setAreaFilter}
          />
          Back-End
        </label>
        <label htmlFor="full-stack">
          <input
            type="radio"
            id="full-stack"
            value="full-stack"
            name="area-type"
            onClick={setAreaFilter}
          />
          Full-Stack
        </label>
      </div>
      <div>
        <h4>Stacks</h4>
        {
          stacksData.map((stackName) => (
            <label htmlFor={stackName}>
              <input
                type="checkbox"
                id={stackName}
                value={stackName}
                name="stacks"
                onClick={setStacksFilter}
              />
              {stackName}
            </label>
          ))
        }
      </div>
    </div>
  );
}

ProjectsFilter.propTypes = {
  filters: PropTypes.shape(PropTypes.any).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default ProjectsFilter;
