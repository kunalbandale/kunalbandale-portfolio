import './index.scss'
import Loader from 'react-loaders'
import {useEffect, useRef, useState} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [LetterClass , setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
    
        // Return a cleanup function to clear the timeout
        return () => {
          clearTimeout(timer)
        }
      }, [])

      const sendEmail = (e) => {
        e.preventDefault()
        emailjs
        .sendForm(
            'service_dszqcji',
            'template_o43u8yc',
            refForm.current,
            '1PHDA6qp0msOvZk2J'
        ).then(
            () => {
                alert('Message Sent Sucessfully!')
                window.location.reload(false);
            },
            () => {
                alert("Failed!! Try Again")
            }
        )
      }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                    idx={15}/>
                </h1>
                <p>Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.</p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='name' required/>
                            </li>
                            <li className='half'>
                                <input type="email" name='email' placeholder='abc@gmail.com'required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required/>
                            </li>
                            <li>
                                <textarea placeholder='message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='Send'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        
        </>
    )
}

export default Contact