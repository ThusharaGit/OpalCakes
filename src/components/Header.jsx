import './Header.css'

function Header({headerComponents, pageNo}) {
 
    return (
      <div className='header_group'>
       <div className='header_all' style={{backgroundImage: `url(${headerComponents[pageNo].Picture})`}}>
        <h1 className= 'header_text'>{headerComponents[pageNo].Heading}</h1>  
       </div>
      </div>
    )
  }
  
  export default Header
  