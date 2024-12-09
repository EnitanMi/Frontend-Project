import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import loremOne from '../../assets/LoremOne.png';
import loremTwo from '../../assets/LoremTwo.jpg';
import loremThree from '../../assets/LoremThree.jpg';
import './Blog.css';
import arrowVector from '../../assets/VectorActor.png'

export default function Blog() {
  return (
    <div className="parent-card">
      {/* Paper with no elevation */}
     
      <Paper elevation={3} className="paper-box">
      <div className="content">
        <img
          src={loremOne} // Image at the top
          alt="" className='loremImage'
        />
          <div className="arrowDate">
        <img src={arrowVector} alt=""  className='arrOw'/>
         <Typography variant='h5' className='tyPo'>26th June</Typography>
         </div>
        <Typography variant="h6" className='loremSix'>
          Lorem Ipsum
        </Typography></div>
       
      </Paper>

      {/* Default Paper (elevation = 1) */}
      <Paper elevation={3}  className="paper-box">
        <div className="content">
        <img 
          src={loremTwo} // Image at the top
          alt="" className='loremImage'
          
        />
        <div className="arrowDate">
        <img src={arrowVector} alt="" className='arrOw' />
         <Typography variant='h5' className='tyPo'>26th June</Typography>
         </div>
        <Typography variant="h6" className='loremSix'>
          Lorem Ipsum
        </Typography></div>
      </Paper>

      {/* Paper with elevation 3 */}
      <Paper elevation={3} className="paper-box">
        <div className="content">
        <img
          src={loremThree} // Image at the top
          alt="" className='loremImage'
         
        />
        <div className="arrowDate">
        <img src={arrowVector} alt=""  className='arrOw'/>
         <Typography variant='h5' className='tyPo'>26th June</Typography>
         </div>
        <Typography variant="h6" className='loremSix'>
          Lorem Ipsum
        </Typography></div>
      </Paper>
      
    </div>
  );
}
