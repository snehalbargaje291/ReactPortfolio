import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Chatbot from './components/Chatbot'
import { BrowserRouter as Router } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({duration: 2000, easing: 'ease-in-sine'});
}, [])
  return (
    <Router>
      <Navbar />
      <Hero />
      <Portfolio id="portfolio"/>
      <Contact id="contact"/>
      <About id="about"/>
      <Chatbot />
      <Footer />
    </Router>
  )
}

export default App
