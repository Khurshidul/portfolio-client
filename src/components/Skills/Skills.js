import React, { useEffect, useState } from 'react'
import './Skills.scss'
import 'animate.css'
import html from '../../assets/images/skills/html.png'
import css from '../../assets/images/skills/css.png'
import react from '../../assets/images/skills/react.png'
import express from '../../assets/images/skills/express-js.png'
import tailwind from '../../assets/images/skills/tailwind.png'
import bootstrap from '../../assets/images/skills/bootstrap.png'
import mui from '../../assets/images/skills/mui.png'
import firebase from '../../assets/images/skills/firebase.png'
import node from '../../assets/images/skills/node.png'
import mongodb from '../../assets/images/skills/mongodb.png'
import mysql from '../../assets/images/skills/mysql.png'
import jwt from '../../assets/images/skills/jwt.png'
import cpp from '../../assets/images/skills/c++.png'
import python from '../../assets/images/skills/python.png'
import js from '../../assets/images/skills/js.png'
import ts from '../../assets/images/skills/ts.png'
import php from '../../assets/images/skills/php.png'
import wp from '../../assets/images/skills/wp.png'

import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import Loader from 'react-loaders'
const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container skill-page">
        <div className="text-blog">
          <h1>
            <AnimatedLetter
              letterClass={letterClass}
              strArray={['M', 'Y', ' ', 'S', 'K', 'I', 'L', 'L', 'S']}
              idx={15}
            />
          </h1>
        </div>
        <br />
        <br />
        <div className="skills">
          <h1 className="frontend-title">FRONTEND SKILLS</h1>
          <div className="frontend-skills">
            <div className="frontend animate__animated animate__fadeInUp">
              <img src={html} alt="html" />
              <h3>HTML</h3>
              <span className="bar">
                <span className="html"></span>
              </span>
            </div>
            <div className="frontend">
              <img src={css} alt="css" />
              <h3>CSS</h3>
              <span className="bar">
                <span className="css"></span>
              </span>
            </div>

            <div className="frontend">
              <img src={react} alt="react" />
              <h3>REACT JS</h3>
              <span className="bar">
                <span className="react"></span>
              </span>
            </div>
            <div className="frontend">
              <img src={express} alt="express" />
              <h3>EXPRESS JS</h3>
              <span className="bar">
                <span className="express"></span>
              </span>
            </div>
            <div className="frontend">
              <img src={tailwind} alt="tailwind css" />
              <h3>TAILWIND</h3>
              <span className="bar">
                <span className="tw"></span>
              </span>
            </div>
            <div className="frontend">
              <img src={bootstrap} alt="bootstrap" />
              <h3>BOOTSTRAP</h3>
              <span className="bar">
                <span className="bootstrap"></span>
              </span>
            </div>
            <div className="frontend">
              <img src={mui} alt="material-ui" />
              <h3>MATERIAL UI</h3>
              <span className="bar">
                <span className="mui"></span>
              </span>
            </div>
            <div className="frontend">
              <img src={firebase} alt="firebase" />
              <h3>FIREBASE</h3>
              <span className="bar">
                <span className="firebase"></span>
              </span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <h1 className="backend-title">BACKEND SKILLS</h1>
          <div className="backend-skills">
            <div className="backend">
              <img src={node} alt="node js" />
              <h3>NODE</h3>
              <span className="bar">
                <span className="node"></span>
              </span>
            </div>
            <div className="backend">
              <img src={mongodb} alt="mongodb" />
              <h3>MONGODB</h3>
              <span className="bar">
                <span className="mongodb"></span>
              </span>
            </div>
            <div className="backend">
              <img src={mysql} alt="mysql" />
              <h3>MYSQL</h3>
              <span className="bar">
                <span className="mysql"></span>
              </span>
            </div>
            <div className="backend">
              <img src={jwt} alt="json web tocken" />
              <h3>JWT</h3>
              <span className="bar">
                <span className="jwt"></span>
              </span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h1 className="language-title">LANGUAGE SKILLS</h1>
          <div className="language-skills">
            <div className="language">
              <img src={cpp} alt="c++" />
              <h3>C++</h3>
              <span className="bar">
                <span className="cpp"></span>
              </span>
            </div>
            <div className="language">
              <img src={python} alt="python" />
              <h3>PYTHON</h3>
              <span className="bar">
                <span className="python"></span>
              </span>
            </div>
            <div className="language">
              <img src={js} alt="javascript" />
              <h3>JAVASCRIPT</h3>
              <span className="bar">
                <span className="js"></span>
              </span>
            </div>
            <div className="language">
              <img src={ts} alt="typescript" />
              <h3>TYPESCRIPT</h3>
              <span className="bar">
                <span className="ts"></span>
              </span>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h1 className="familiar-title">FAMILIAR SKILLS</h1>
          <div className="familiar-skills">
            <div className="familiar">
              <img src={php} alt="php" />
              <h3>PHP</h3>
              <span className="bar">
                <span className="php"></span>
              </span>
            </div>
            <div className="language">
              <img src={wp} alt="wordpress" />
              <h3>WORDPRESS</h3>
              <span className="bar">
                <span className="wp"></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
