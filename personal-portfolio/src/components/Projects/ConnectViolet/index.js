import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import ConnectVioletSS from '../../../assets/images/connect-violet.jpg'
import HackViolet from '../../../assets/images/hackviolet.jpg'

const ConnectViolet = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container connect-violet-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 'n', 'e', 'c', 't', 'V', 'i', 'o', 'l', 'e', 't']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        ConnectViolet is a website with an integrated personality test to help women in STEM majors on campus
                        find each other and build a community! I collaborated in a team of 3 to create this website using
                        Replit, HTML, and JavaScript. This project was started during Association of Women in Computing's 
                        2023 HackViolet Hackathon at Virginia Tech,
                    </p>
                    <div className='images'>
                        <div className='project'>
                            <Link to="https://laurenruiz.github.io/connect-violet/" target="_blank">
                                    <img className="pics" src={ConnectVioletSS} alt="connect violet pic" />
                            </Link>
                            <div className='title'>
                                <h2>ConnectViolet!</h2>
                            </div>
                        </div>
                        <div className='links'>
                            <Link to="https://main--hackviolet.netlify.app/" target="_blank">
                                <img className="pics" src={HackViolet} alt="hack violet pic" />
                            </Link>
                            <h2>HackViolet!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default ConnectViolet;