import React from 'react'
import PropTypes from 'prop-types'

function ProjectList(props) {
  const { projects } = props;

  return (
    <ul className='projectlist'>
      {projects.map((project, index) => {
        return <li className='projectlist__item' key={index}>
          <img src={project.img} alt={project.category} />
        </li>
      })}
    </ul>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
}

export default ProjectList