import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import ConnectVioletSS from '../../assets/images/connect-violet.jpg'
import PortfolioSS from '../../assets/images/portfolio.png'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['My Projects and Experiences!']}
                            idx={12}
                        />
                    </h1>
                    <div className='images'>
                        <div className='project'>
                            <Link to="/projects/personal-portfolio">
                                <img className="pics" src={PortfolioSS} alt="cv pic" />
                            </Link>
                            <h3>Personal Portfolio!</h3>
                        </div>
                        <div className='project'>
                            <Link to="/projects/connect-violet">
                                    <img className="pics" src={ConnectVioletSS} alt="portfolio pic" />
                            </Link>
                            <div className='title'>
                                <h3>ConnectViolet!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects;