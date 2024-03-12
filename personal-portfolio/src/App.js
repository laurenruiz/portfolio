import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Projects from './components/Projects';
import ConnectViolet from './components/Projects/ConnectViolet';
import PersonalPortfolio from './components/Projects/PersonalPortfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/personal-portfolio" element ={<ConnectViolet />} />
        <Route path="/personal-portfolio/personal-portfolio" element ={<Contact />} />
        <Route path="/projects" element ={<Projects />} />
        <Route path="/projects/connect-violet" element ={<ConnectViolet />} />
        <Route path="/projects/personal-portfolio" element ={<PersonalPortfolio />} />
        <Route path="/contact" element ={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
