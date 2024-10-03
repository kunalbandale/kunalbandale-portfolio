import LogoTitle from '../../assets/images/hand.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import React, { useEffect, useState } from 'react'
// import Logo from './Logo'
import Loader from 'react-loaders'


import './index.scss'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'u', 'n', 'a', 'l']
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v']

  // useEffect(() => {
  //     return setTimeout(() => {
  //         setLetterClass('text-animate-hover')
  //     },4000)
  // }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // Return a cleanup function to clear the timeout
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>

          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>

          <img src={LogoTitle} alt="developer"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Front End Developer</h2>
        <Link to="/contact" className="flat-button">
          Contact
        </Link>
        <a href="https://drive.google.com/drive/folders/1nZ_KCpWaOS5lrUVRD-fsO8L-UXL-6DLQ?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flat-button">
  Resume
</a>

      </div>
      {/* <Logo/> */}
    </div>
    <Loader type="pacman"/>
    </>
  )
}

export default Home
