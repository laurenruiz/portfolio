import './index.scss'
import AnimatedLetters from '../../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import YTVidSS from '../../../assets/images/youtube_picture.png'
import PortfolioSS from '../../../assets/images/portfolio.png'


const PersonalPortfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container personal-port-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'e', 'r', 's', 'o', 'n', 'a', 'l', ' ', 'P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Using these youtube videos, I was able to create this personal portfolio! This portfolio really
                        helped me strengthened my knowledge and experience in React, and in HTML, CSS, and JavaScript.
                        It has also given me an opportunity to explore my creative side and my writing skills. I hope to
                        expand upon this portfolio by including other personal projects and class projects.
                    </p>
                    <div className='images'>
                        <div className='project'>
                            <Link to="/">
                                    <img className="pics" src={PortfolioSS} alt="portfolio pic" />
                            </Link>
                            <div className='title'>
                                <h2>Personal Portfolio!</h2>
                            </div>
                        </div>
                        <div className='links'>
                            <Link to="https://www.youtube.com/watch?v=bmpI252DmiI" target="_blank">
                                <img className="pics" src={YTVidSS} alt="yt vid pic" />
                            </Link>
                            <h2>Video Tutorial Followed!</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default PersonalPortfolio;