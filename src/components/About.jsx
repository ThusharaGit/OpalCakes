import './About.css'
import { useState } from 'react'
import Header from './Header'

import Carausel from "./Carousel"
import Slider from "./MySlider"
import MySlider from './MySlider2'

function About({ headerComponents }) {
  const [pageNo, setPageNo] = useState(1)
  return (
    <div className='app'>
      <Header headerComponents={headerComponents} pageNo={pageNo} />
      <div className='about_component'>
        <div className='about_picture_sml'></div>
        <div className='about_desc_sml'>
          <div className='desc_set'>
            <h1 className='about_desc_heading'>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus minus aliquid nemo,
              voluptates beatae tempore voluptatem adipisci cum optio suscipit commodi rerum doloribus voluptate.
              Veritatis provident quis culpa facere!</p>
          </div>
        </div>

        <div className='about_desc_lg'>
          <div className='desc_set'>
            <h1 className='about_desc_heading'>Lorem ipsum dolor sit amet</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores temporibus minus aliquid nemo,
              voluptates beatae tempore voluptatem adipisci cum optio suscipit commodi rerum doloribus voluptate.
              Veritatis provident quis culpa facere!</p>
          </div>
        </div>
        <div className='about_picture_lg'></div>

      </div>
      <div className='experience_div'>
        <div className='trophy_image'></div>
        <h1 >OUR EXPERIENCE</h1>
        <p className='experience_desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi quia illum cumque atque sit doloribus repellat distinctio  </p>
        <div className='experience_big_circle_set'>
          <div className='experience_mini_circle_lg'>
            <h1>6</h1>
            <p>Years</p>
          </div>
          <div className='experience_circle'>
            <h1>23</h1>
            <p>Trips</p>
          </div>
          <div className='experience_mini_circle_lg'>
            <h1>72</h1>
            <p>Chlidren</p>
          </div>
        </div>
        <div className='experience_small_circle_set'>
          <div className='experience_small_circle'></div>
          <div className='experience_small_circle'></div>
          <div className='experience_small_circle'></div>
        </div>
      </div>
      {/* <div className='meet_team_div'>
        <div className='meet_team_image'></div>
        <h1 className='meet_team_heading'>MEET OUR TEAM</h1>
        <div className='member_card_set'>
          <div className='member_card_lg' >
            <div className='member_photo' id='mem1'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='member_card'>
            <div className='member_photo' id='mem2'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
          <div className='member_card_lg'>
            <div className='member_photo' id='mem3'></div>
            <div className='member_desc'>
              <h3>ALEXANDER RIGHT</h3>
              <h4>TOUR GUIDE</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </div> */}

      <MySlider/>

      <div className='partners_div'>
        <div className='partners_main_desc'>
          <div className='partners_main_image'></div>
          <h1 className='partners_heading'>OUR PARTNERS</h1>
          <p className='partners_main_disc_para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam odit debitis tempora, alias necessitatibus veritatis animi possimus quam reprehenderit vitae tenetur at velit ducimus assumenda fugit non unde repudiandae?</p>
        </div>
        <div className='partner_card_set'>
        <div className='partner_cards'>
          <div className='partners_logo' id='partner_logo1'></div>
          <h1 className='partners_heading'>Lorem Ipsum</h1>
          <p className='partner_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque numquam molestiae natus veniam, perferendis excepturi porro at impedit aliquid, est molestias consequuntur! Cupiditate tenetur distinctio magni in architecto saepe quae.</p>
        </div>
        <div className='partner_cards'>
          <div className='partners_logo' id='partner_logo2'></div>
          <h1 className='partners_heading'>Lorem Ipsum</h1>
          <p className='partner_desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque numquam molestiae natus veniam, perferendis excepturi porro at impedit aliquid, est molestias consequuntur! Cupiditate tenetur distinctio magni in architecto saepe quae.</p>
        </div>
        </div>

        <div className='partners_bottom_text'>
       <p className='partners_bottom_desc'> Would you like to become a part of an exciting project on growing a healthy and active young generation? Contact us for more details.</p> 
        </div>
        <div className='return_set'>
        <p className='retutn_text'>Return to the top</p>
        <div className='return_btn'>Go</div>
        </div>

      </div>
    </div>
  )
}

export default About