 

import './Home.css'
import { Link } from 'react-router-dom'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Navbar from '../../components/navbar/Navbar';
import HomeTabs from '../tabs/HomeTabs';
import ariseLogo from '../../assets/ariseLogo.png'
import ephicentLogo from '../../assets/ephicentLogo.png'
import incLogo from '../../assets/incLogo.png'
import paacLogo from '../../assets/paacLogo.png'
import pipeLogo from '../../assets/pipeLogo.png'
import togetherLogo from '../../assets/togetherLogo.png'
import HomeCards from '../homecards/HomeCards';
import Blog from '../homecards/Blog';
import zigZag from '../../assets/ZigZag.png'
import NewsLetter from '../../components/newsletter/NewsLetter';
import Footer from '../../components/footer/Footer';


export default function Home() {
  return (
     <div className='home'>
      <section>
        <div className="hero-section">
          <div className="hero-overlay">
            <Navbar/>
            <div className="hero-text">
              <div className="h1">
                 <h1>Impacting <br /> Lives of Young <br /> People in Africa</h1>
              </div>
              <div className="p-tag">
                 <p>Making youngsters leverage their <br /> skills, abilities and talents stand <br /> out as a goal getter</p>
              </div>
              <div className="how">
                 <button><Link to='/join us'>Join Us</Link></button>
                   <div className="join">
                  <PlayCircleIcon className='play' style={{}}/>
                  <span>How It Works</span>
                    </div>
              </div>
        
            </div>
           
          </div>
        </div>
      </section>

      <section>
        <div className="Follow-section">
          <div className="how-box">
             <h1>How it Works</h1>
             <p>Lorem ipsum dolor sit amet consectetur. Sit curabitur nulla justo <br />
                tellus amet. Ut placerat dolor massa metus quisque sodales semper. <br />
                Hac donec vulputate pharetra augue eu congue.</p>
                 
          </div>
          <HomeTabs/>
        </div>
      </section>
      <section>
        <div className="our-partners">
          <div className="logo">
            <div className="our-content">
              <h1>Our Partners</h1>
              <p>People Who Have Trust In Us</p>
            </div>
            <div className="our-links">
               <img src={ariseLogo} alt="#" className='img-one'/>
               <img src={ephicentLogo} alt="#" />
               <img src={incLogo} alt="#" />
               <img src={paacLogo} alt="#" />
               <img src={pipeLogo} alt="#" />
              <img src={togetherLogo} alt="#" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="gallery-scroll">
          <div className="gallery-overlay"></div>
        </div>
      </section>

      <section>
        <div className="whatThey-say">
          <h1>What people say about us</h1>
          <HomeCards/>
        </div>
      </section>

      <section>
        <div className="our-blog">
          <div className="our-content">
          <h1>Our Blog</h1>
          <p>Lorem ipsum dolor sit amet consectetur. <br /> Sit curabitur nulla justo tellus amet.</p>
          <img src={zigZag} alt="" />
          </div>

        <Blog/>
        </div>
      </section>
      <section>
        <NewsLetter/>
        <Footer/>
      </section>



     </div>
    
  )
}
