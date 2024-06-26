import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Header from './Header'
import './Trips.css'
import Calendar from './Calendar'

function Trips({ headerComponents }) {
  const [pageNo, setPageNo] = useState(2)
  const navigate = useNavigate()
  return (
    <div className='app'>
      <Header headerComponents={headerComponents} pageNo={pageNo} />
      <div className='trips_body'>
        <div className='main-desc'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, maxime sint error commodi accusantium soluta, ex dolore doloribus vitae sit perspiciatis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus autem ut officia nesciunt, sapiente corrupti perspiciatis suscipit facere expedita molestias.
          </p>
        </div>

        <div className='calendar_description_all'>

          <div className='calendar_div'>

            
              <h2>NEW TRIPS ARE STARTING IN MARCH!</h2>
              <p className='calendar_description_para'>Check the schedule of our upcoming trips and make sure to book a spot there!</p>
              <p className='calendar_description_para'>For more details contact us here:</p>
              <div className='desc_dates_div'>
                <div className='green_date'>
                  <p>9</p>
                </div>
                <p className='green_date_desc'>
                  <p> - dates of our next trips which you can choose from</p>
                </p>
                
              </div>
              <button className="bookAtripBtn large" onClick={() => navigate('About')}>BOOK A TRIP</button>
            

          </div>
          <div className='calendar'>
            <Calendar/>
          </div>
        </div>
        <button className="bookAtripBtn small" onClick={() => navigate('About')}>BOOK A TRIP</button>

        <h1 className='previous_trips_heading'>PREVIOUS TRIPS</h1>

        <div className='previous_trips_div'>
          <div  className='previous_trips_picture' id='previous_trips_pic1'></div>
          <div  className='previous_trips_desc'>
            <h2 className='previous_trips_para'>FUN ON COLIBITA LAKE</h2>
            <h3 className='previous_trips_para'>JUNE 2023</h3>
            <p className='previous_trips_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus voluptatum fugiat.</p>
            <p className='previous_trips_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores asperiores debitis fuga nostrum, dolorem ut.</p>
            <div className='see_detais_div'>
            <h2 className='see_details_heading'>SEE DETAILS</h2>
            <button className="bookAtripBtn" onClick={() => navigate('About')}>go</button>

            </div>
          </div>
        </div>

        <div className='previous_trips_div'>
          <div  className='previous_trips_picture small' id='previous_trips_pic2'></div>
          <div  className='previous_trips_desc small '>
            <h2 className='previous_trips_para'>KAYAKING WITH 2ND GRADE</h2>
            <h3 className='previous_trips_para'>JULY 2023</h3>
            <p className='previous_trips_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus voluptatum fugiat.</p>
            <p className='previous_trips_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores asperiores debitis fuga nostrum, dolorem ut.</p>
            <div className='see_detais_div'>
            <h2 className='see_details_heading'>SEE DETAILS</h2>
            <button className="bookAtripBtn" onClick={() => navigate('About')}>go</button>

            </div>
          </div>
        </div>

        <div className='previous_trips_div'>
         
          <div  className='previous_trips_desc large'>
            <h2 className='previous_trips_para'>KAYAKING WITH 2ND GRADE</h2>
            <h3 className='previous_trips_para'>JULY 2023</h3>
            <p className='previous_trips_para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus voluptatum fugiat.</p>
            <p className='previous_trips_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, dolores asperiores debitis fuga nostrum, dolorem ut.</p>
            <div className='see_detais_div'>
            <h2 className='see_details_heading'>SEE DETAILS</h2>
            <button className="bookAtripBtn" onClick={() => navigate('About')}>go</button>

            </div>
          </div>
          <div  className='previous_trips_picture large' id='previous_trips_pic2'></div>
        </div>

        <div className='return_set'>
        <p className='retutn_text'>Return to the top</p>
        <div className='return_btn'>Go</div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Trips