import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons' // Machine learning icon
import Loader from 'react-loaders'

const About = () => {
    const [LetterClass , setLetterClass] = useState('text-animate')

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
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={LetterClass}
                            strArray = {['A','b','o','u','t', ' ' , 'm','e']}
                            idx={15}
                        />
                    </h1>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  </p>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  </p>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum  </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#E34F26' />
                        </div>
                        {/*  */}
                        <div className='face1'>
                            <FontAwesomeIcon icon={faHtml5} color='#E34F26' />
                        </div>
                        {/*  */}
                        <div className='face2'>
                            <FontAwesomeIcon icon={faCss3Alt} color='#1572B6' />
                        </div>
                        {/*  */}
                        <div className='face3'>
                            <FontAwesomeIcon icon={faJs} color='#1572B6' />
                        </div>
                        {/*  */}
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#61DAFB' />
                        </div>
                        {/*  */}
                        <div className='face5'>
                            <FontAwesomeIcon icon={faPython} color='#306998' />
                        </div>
                        {/*  */}
                        <div className='face6'>
                            <FontAwesomeIcon icon={faBrain} color='#FF6384' />
                        </div>

                    </div>
                </div>
            </div>
            <Loader type="pacman"/>
        </>

    )
}

export default About;