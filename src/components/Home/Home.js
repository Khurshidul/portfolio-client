import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import profile from '../../assets/images/profile-pic.png'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['H', 'U', 'R', 'S', 'H', 'I', 'D', 'U', 'L']
  const jobArray = [
    'M',
    'E',
    'R',
    'N',
    ' ',
    'S',
    'T',
    'A',
    'C',
    'K',
    ' ',
    'D',
    'E',
    'V',
    'E',
    'L',
    'O',
    'P',
    'E',
    'R',
  ]
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass}`}>H</span>
            <span className={`${letterClass} _12`}>I,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'M</span>
            <img
              src={logo}
              alt="Javascript Developer Name, Web Developer Name"
            />

            <AnimatedLetter
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h3>
            Frontend / Backend / Javascript Developer / Full Stack Developer.{' '}
          </h3>
          <Link className="flat-button" to={'/contact'}>
            CONTACT ME
          </Link>
        </div>
        <Logo />
        <div className="profile-pic">
          <div className="content">
            <img src={profile} alt="" />
            <h2>
              I'm a <br /> <span>MERN STACK Developer.</span>
              <br />
              <a href="http://localhost:3000/contact"> HIRE ME</a>
            </h2>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
