import {useState} from 'react'
import Header from './Header'

function Contact({headerComponents}) {
  const [pageNo,setPageNo] = useState(4)
    return (
      <div className='app'>
      <Header headerComponents= {headerComponents} pageNo= {pageNo}/>
       Contact Component
      </div>
    )
  }
  
  export default Contact
