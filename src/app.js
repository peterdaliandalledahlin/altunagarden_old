import Header from './components/Header'
import Home from './components/Home'
import Book from './components/Book'
import About from './components/About'
import Gallery from './components/Gallery'
import Activities from './components/Activities'
import Map from './components/Map'
import Contact from './components/Contact'
import Timeline from './components/Timeline'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Weather from './components/Weather'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container-fluid p-0">
      ${Header()}
      ${Home()}
      ${Modal()}
    </div>
    <div class="container">
      ${await Weather()}
      ${Book()}
      ${About()}
      ${Gallery()}
      ${Activities()}
      ${Map()}
      ${Contact()}
      ${Timeline()}
    </div>
    <div class="container-fluid p-0">
      ${Footer()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;