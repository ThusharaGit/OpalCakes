import './Home.css'
import { useNavigate } from "react-router-dom"
import Carausel from "./Carousel"
import Slider from "./MySlider"

function Home({parentsComments}) {
  const navigate = useNavigate()

  return (
    <div className='app'>
      <div className="mainDiv ">
        <div className="sloganDiv">
          <h2 className="sloganText ">EMPOWERING YOUTH</h2>
          <p className='slogan_para'>... one paddle at a time!</p>
          <button className="bookAtripBtn home_large" onClick={() => navigate('Contact')}>BOOK A TRIP</button>
        </div>
        
        <div className="sloganimageDiv"></div>
        <div className='back_image'></div>
        <button className="bookAtripBtn home_small" onClick={() => navigate('Contact')}>BOOK A TRIP</button>
      </div>

      <div className="mainDiv ">
        <div className="missionimageDiv"></div>
        <div className='back_mission_image'></div>
        <div className="missionDiv">
          <h2 className="missionText">OUR MISSION</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, laboriosam commodi nemo harum totam consequuntur odit odio illum soluta quisquam similique voluptate ratione cumque dolor aperiam dolorum necessitatibus distinctio! Harum!</p>
          <div className="learnMoreDiv">
            <h2 className="learnMoreText">LEARN MORE</h2>
            <button className="learnMoreBtn" onClick={() => navigate('About')}>go</button>
          </div>
        </div>

      </div>

      <div className="specialDiv">
        <h2 className='heading_and_comments'>WHAT MAKES TRIPS SPECIAL</h2>
        <div className="specialWrapper">
          <div className="special">
            <div id="specialImage1" className="specialImage"></div>
            <h3 className="specialHeading">FRIENDSHIP</h3>
            <p className="specialText">Shared adventures form lasting bonds and create unforgettable memories</p>
          </div>
          <div className="special">
            <div id="specialImage2" className="specialImage"></div>
            <h3 className="specialHeading special_small">NATURE</h3>
            <p className="specialText special_small">An outdoor experience that fosters a deep appreciation for the environment  </p>
          </div>
          <div className="special">
            <div id="specialImage3" className="specialImage"></div>
            <h3 className="specialHeading special_small">LIFE SKILLS</h3>
            <p className="specialText special_small">Learn teamwork, communication, and resilience through kayaking challenges </p>
          </div>
          <div className="special">
            <div id="specialImage4" className="specialImage"></div>
            <h3 className="specialHeading special_small">CONFIDENCE</h3>
            <p className="specialText special_small">Master kayaking to boost self-trust and readiness to tackle new adventures </p>
          </div>
        </div>
      </div>


      {/* <div className='carousel_group_around'>
       <div className='carousel_group'>
      <div style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carausel>
          <img src="https://cache.desktopnexus.com/thumbseg/2570/2570543-bigthumbnail.jpg" alt="" />
          <img src="https://img.freepik.com/premium-photo/lake-with-canoes-sunset-background_865967-49131.jpg" alt="" />
          <img src="https://img.freepik.com/premium-photo/boat-lake-with-sunset-background_865967-297784.jpg" alt="" />
        </Carausel>

      </div>
      <div className='carausel_large' style={{ maxWidth: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <Carausel>
          <img src="https://img.freepik.com/premium-photo/lake-with-canoes-sunset-background_865967-49131.jpg" alt="" />
          <img src="https://img.freepik.com/premium-photo/lake-with-canoes-sunset-background_865967-49131.jpg" alt="" />
          <img src="https://img.freepik.com/premium-photo/boat-lake-with-sunset-background_865967-297784.jpg" alt="" />
        </Carausel>
       

      </div>
     
      </div>
     
      </div> */}




      <Slider>

      </Slider>




      <div className='comments'>
        <div className='heading_and_comments'>
        <h2 className='comments_heading'>WHAT PARENTS SAY ABOUT OUR PROJECT:</h2>
        <div className='comments_div'>
          <h4>{parentsComments[0].desc}</h4>
          <h4>{parentsComments[0].name}</h4>
          <div className='all_circles'>
            <button className='circle'></button>
            <button className='circle'></button>
            <button className='circle'></button>
            <button className='circle'></button>
          </div>
        </div>
        </div>
        <h2 className='trips_coming_heading'><span className='new'>NEW</span> TRIPS ARE COMING!</h2>
        <div className='trips_coming_text'>
          <h4>Ready to embark on an unforgettable adventure? </h4>
          <h4>Contact us today to book your child's spot on our next kayaking journey.</h4>
        </div>

        <div className='return_element'>
        <div className='return_set '>
        <p className='retutn_text'>Return to the top</p>
        <div className='return_btn'>Go</div>
        </div>
        </div>
       
      </div>

      
      
      
    </div>
  )
}

export default Home
