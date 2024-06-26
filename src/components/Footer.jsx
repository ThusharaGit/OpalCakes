import './Footer.css'

function Footer() {
 
    return (
      <div className='footer_body'>
        <div>
       <div className='footer_container'>
       <div className="logoImage_footer"></div>
        <div className='left'>
            <div className='left_texts'>
            <h1>SITE MAP</h1>
            <a href='/'>Home</a>
            <a href='./About'>About</a>
            <a href='./Trips'>Tours</a>
            <a href='./FAQs'>FAQs</a>
            </div>

        </div>
        <div className='middle'>
            <div></div>
            <div className='middle_box'>
              <h4>Designed and developed for PaddleXplorer</h4>  
              <h4>by <span className='school_name'>ReDI School</span></h4>
              <h4>in Munich, Germany</h4>  
            </div>
            <h5 className='copy_write_big'>Copywright © 2023. All rights reserved.</h5>
        </div>
        <div className='right'>
            <div className='right_box'>
                <h1>CONTACT US</h1>
                <h4>Clubul Copiilor Năsăud</h4>
                <h4>DN17C 9, Nasaud 425200, </h4>
                <h4>Romania</h4>
                <div className='contact_icon'>
                <ion-icon name="mail"></ion-icon>
                <h5>club_nasaud@yahoo.com</h5>
                </div>
                <div className='contact_icon'>
                <ion-icon name="call"></ion-icon>
                <h5>+040263361447</h5>
                </div>
               
                
            </div>
            <h5 className='copy_write_small'>Copywright © 2023. All rights reserved.</h5>
        </div>
       </div>
       </div>
      </div>
    )
  }
  
  export default Footer