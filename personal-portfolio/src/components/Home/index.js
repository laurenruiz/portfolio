import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';
import HeadShot from '../../assets/images/laurenruiz@vt.edu-7.jpg'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'L', 'a', 'u', 'r', 'e', 'n', ' ', 'R', 'u', 'i', 'z', ',']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', 'i', 'n', 'g', ' ', 'S', 't', 'u', 'd', 'e', 'n', 't']
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 6500)
    }, [])
    
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>
                <AnimatedLetters letterClass = {letterClass}
                strArray={nameArray}
                idx={17} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray={jobArray}
                idx={30} />
                </h1>
                <h2>Current Sophomore at Virginia Polytechnic State University and Institute</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <div className='headshot'>
            <img src={HeadShot} alt="headshot" />
        </div>
        <Loader type="pacman" />
    </>
    )
}

export default Home