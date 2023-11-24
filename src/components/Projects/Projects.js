import React, { useEffect, useState } from 'react'
import './Projects.scss'
import 'animate.css'
import axios from 'axios'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Projects = () => {
  const [projects, setProjects] = useState([])
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    axios
      .get('http://localhost:1000/projects')
      .then((res) => {
        setProjects(res.data)
      })
      .catch((err) => console.error(err))
  }, [])
  console.log(projects)
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container projects-page">
        <div className="text-blog">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['P', 'R', 'O', 'J', 'E', 'C', 'T', 'S']}
              idx={15}
            />
          </h1>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <div
              key={project._id}
              className="project-data  animate__animated animate__fadeInUp"
            >
              <img src={project.poster} alt="" />
              <div className="card-body">
                <h1 className="title">{project.title}</h1>
                <p className="description">{project.description}</p>
                <div className="buttons">
                  <a href={project.url}>
                    <button className="url">
                      LIVE SITE &nbsp;
                      <FontAwesomeIcon
                        className="url-icon"
                        icon={faArrowUpRightFromSquare}
                      />
                    </button>
                  </a>
                  <a href={project.githubUrl}>
                    <button className="githubUrl">
                      GITHUB &#160;
                      <FontAwesomeIcon className="git" icon={faGithub} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
