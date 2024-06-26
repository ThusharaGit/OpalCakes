import {useState} from 'react'
import Header from './Header'

function Contact2({headerComponents}) {
  const [pageNo,setPageNo] = useState(5)
    return (
      <div className='app'>
      <Header headerComponents= {headerComponents} pageNo= {pageNo}/>
       Contact2 Component
      </div>
    )
  }
  
  export default Contact2
