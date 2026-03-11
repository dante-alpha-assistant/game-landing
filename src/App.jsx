import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Features from './components/Features'
import Gallery from './components/Gallery'
import Trailer from './components/Trailer'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Trailer />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
