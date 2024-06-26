import './Nav.css'
import { useNavigate } from "react-router-dom"
function Nav() {
    const navigate = useNavigate()
 
    return (
        <div className='nav'>
            <div className="logoDiv" onClick={() => navigate('/')}>
             <div className="logo">PADDLE</div>
             <div className="logoImage"></div>
             <div className="logo">XPLORER</div>
             
            </div>
            <button className="navBtn" onClick={() => navigate('/')}>HOME</button>
            <button className="navBtn" onClick={() => navigate('About')}>ABOUT</button>
            <button className="navBtn" onClick={() => navigate('Trips')}>TOURS</button>
            <button className="navBtn" onClick={() => navigate('FAQs')}>FAQs</button>

            <div className="contact_button_set">
            <button className="navBtn" onClick={() => navigate('Contact')}>CONTACT</button>
            <button className="navBtn" onClick={() => navigate('Contact2')}>CONTACT2</button>
            </div>
        </div>

    )
}

export default Nav
