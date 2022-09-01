import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import NewsLetter from './components/NewsLetter'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
<section>
  <Navbar/>

  <Hero/>
  
<Home/>
<Section/>
<NewsLetter/>
<Cards/>
<Footer/>
</section>

   </>
  )
}

export default App
