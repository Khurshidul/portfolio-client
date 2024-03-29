import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.scss'
import logo from '../../assets/images/logo.png'
import logoSubtitle from '../../assets/images/logoSubtitle.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faBlog,
  faDiagramProject,
  faBrain,
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to={'/'}>
        <img src={logo} alt="logo" />
        <img className="logo-sub" src={logoSubtitle} alt="logoSubtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to={'/'}>
          <FontAwesomeIcon
            className=""
            icon={faHome}
            color="#4d4d4e"
          ></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          className="skill"
          activeclassname="active"
          to={'/skills'}
        >
          <FontAwesomeIcon icon={faBrain} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          className="projects"
          activeclassname="active"
          to={'/projects'}
        >
          <FontAwesomeIcon icon={faDiagramProject}></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          className="about"
          activeclassname="active"
          to={'/about'}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
        <NavLink
          exact="true"
          className="contact"
          activeclassname="active"
          to={'/contact'}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>

        <NavLink
          exact="true"
          className="blog"
          activeclassname="active"
          to={'/blog'}
        >
          <FontAwesomeIcon icon={faBlog} color="#4d4d4e"></FontAwesomeIcon>
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.linkedin.com/in/md-khurshidul-alam/"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://github.com/Khurshidul"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e"></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target={'_blank'}
            rel="noreferrer"
            href="https://www.facebook.com/khurshidul.alam.00/"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              color="#4d4d4e"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
