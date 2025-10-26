
import './App.css'
import About from './components/About'
import CompanyLogo from './components/CompanyLogo'
import Customer from './components/Customer'
import Design from './components/Design'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TryNow from './components/TryNow'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <CompanyLogo/>
      <Features/>
      <Design/>
      <Customer/>
      <About/>
      <TryNow/>
      <Footer/>
    </>
  )
}

export default App
