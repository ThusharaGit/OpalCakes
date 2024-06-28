import data from './assets/data.json'


import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import FAQs from './components/FAQs'
import Home from './components/Home'
import About from './components/About'
import Trips from './components/Trips'
import Contact from './components/Contact'
// import Contact2 from './components/Contact2'
import Footer from './components/Footer'

// import Navbar from './components/Navbar'






function App() {
  
  return (
    <div className='app'>
     <Nav/>
     {/* <Navbar/> */}
     
     <Routes>
     <Route path= '/' element= {<Home parentsComments={data.parentsComents}/>}/>
      <Route path= 'FAQs' element= {<FAQs headerComponents= {data.headerComponents}/>}/>
      <Route path= 'About' element= {<About headerComponents= {data.headerComponents}/>}/>
      <Route path= 'Trips' element= {<Trips headerComponents= {data.headerComponents}/>}/>
      <Route path= 'Contact' element= {<Contact headerComponents= {data.headerComponents}/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
