import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter as Router } from 'react-router-dom'


function App() {

  return (
    <Router>
      <Navbar />
      <Hero />
      <Portfolio id="portfolio"/>
      <Contact id="contact"/>
      <About id="about"/>
      <Footer />
    </Router>
  )
}

export default App
