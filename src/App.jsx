import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <Router>
      <Navbar />
      <Hero />
      <Portfolio/>
    </Router>
  )
}

export default App
