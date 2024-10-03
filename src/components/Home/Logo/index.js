import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoK from '../../../assets/images/logo-kunal.png' // Assuming this is the correct path for your "K" logo image
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoK} // Updated to the new logo image for "K"
        alt="JavaScript, Developer"
      />

      <svg
        width="559pt"
        height="897pt"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform='translate(0 457) scale(.1 -.1'
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M0.0340936 364V0.363626H44.0682V180.761H48.3295L211.682 0.363626H269.21L116.511 164.426L269.21 364H215.943L89.5227 194.966L44.0682 246.102V364H0.0340936Z"
            fill="#04A4CC" // You can update the color as necessary
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
