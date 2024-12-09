import Navbar from '../../components/navbar/Navbar'
import './Faq.css'
import { FaSearch } from "react-icons/fa";
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import teamImage from '../../assets/teamImage.png'
import NewsLetter from '../../components/newsletter/NewsLetter';
import Footer from '../../components/footer/Footer';






export default function Faq() {
  
  return (
    <div className='Contact'>
      <section>
        <div className="contact-header">
          <div className="contact-overlay">
             <Navbar/>
             <div className="how-parent">
              <h1>How Can We Help You?</h1>
              <form action="">
                <div className="form">
                 <FaSearch className="search-icon" />
                <input type="text" placeholder='search for answers' />
                </div>
              </form>
             </div>
          </div>
        </div>
      </section>
       
       
      <section>
         <div className="activities">
          <div className="activity-box">
            <h2>Getting Started</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
          <div className="activity-box">
            <h2>Talents</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
          <div className="activity-box">
            <h2>Events</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
          <div className="activity-box">
            <h2>Categories</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
          <div className="activity-box">
            <h2>Enrollment Payment</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
          <div className="activity-box">
            <h2>Shortlisting</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
          <div className="activity-box">
            <h2>Voting</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
          <div className="activity-box">
            <h2>Prize Winning</h2>
            <p>Lorem ipsum dolor sit amet consectetur. <br />
            Sit curabitur nulla justo tellus amet.</p>
          </div>
        
        <div className="Frequent">
          <div className="Frequent-hOne">
          <h1 >Frequently asked Questions</h1>
          </div>
        <div className="Accordions">
        <Accordion className='accord'>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
         <h1 className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion className='accord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel2-content"
          id="panel3-header"
        >
         <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
       
      <Accordion className='accord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon' />}
          aria-controls="panel2-content"
          id="panel3-header"
        >
          <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
        
      <Accordion className='accord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel2-content"
          id="panel3-header"
        >
         <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel2-content"
          id="panel3-header"
        >
          <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel2-content"
          id="panel3-header"
        >
         <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion className='accord'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel2-content"
          id="panel3-header"
        >
          <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded className='accord'>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon className='icon'/>}
          aria-controls="panel3-content"
          id="panel9-header"
        >
          
          <h1  className='accord-h'>Do You Offer Customer Support</h1>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
        </div>
        <div className="team">
          <div className="team-content">
          <h1>Didn't find what you're looking for?</h1>
          <p>Our team is active to attend to your mail</p>
          </div>
           <img src={teamImage} alt="" />
           <button type='contact'><p>Contact Us</p></button>
           
        </div>
        </div>
       
         </div>
      </section>
     
     <div className='newsletter'>
      <div className="news">
      <NewsLetter/>
      </div>
      <Footer/>
     </div>
    </div>
  )
}
