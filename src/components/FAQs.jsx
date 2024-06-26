import {useState} from 'react'
import Header from './Header'

function FAQs({headerComponents}) {
  const [pageNo,setPageNo] = useState(3)
    return (
      <div className='app'>
      <Header headerComponents= {headerComponents} pageNo= {pageNo}/>
       FAQs Component
      </div>
    )
  }
  
  export default FAQs
