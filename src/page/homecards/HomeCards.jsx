import {useState} from 'react';
import './HomeCards.css'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import artistLogo from '../../assets/arTist.png'
import PhotoLogo from '../../assets/PhotoGrapher.png'
import softWare from '../../assets/softWare.png'




export default function HomeCards() {
  return (
    <div className='paper-one'>
      {/* Paper with no elevation */}
      
      <Paper className='paperBox' elevation={0} style={{  }}>
      <div className="typography">
        <Typography variant="h6">“Amet minim mollit non deserunt <br />
         ullamco est sit aliqua dolor do <br />
          amet sint. Velit officia consequat <br /> 
          duis enim velit mollit. Exercitation <br />
           veniam consequat.”</Typography></div>
      <div className="image">
        <img
          src={PhotoLogo} 
          alt="#"
          style={{  }}
        /></div>  
      </Paper>
     


      {/* Default Paper (elevation = 1) */}
      
      <Paper className='paperBox' style={{ }}>
      <div className="typography">
        <Typography variant="h6">“Amet minim mollit non deserunt <br />
         ullamco est sit aliqua dolor do <br />
          amet sint. Velit officia consequat <br /> 
          duis enim velit mollit. Exercitation <br />
           veniam consequat.”</Typography></div>
      <div className="image">
        <img
          src={softWare} 
          alt="#"
          style={{ }}
        /></div>
      </Paper>
     

      {/* Paper with elevation 3 */}
    
      <Paper className='paperBox' elevation={3} style={{ }}>
        <div className="typography">
        <Typography variant="h6">“Amet minim mollit non deserunt <br />
         ullamco est sit aliqua dolor do <br />
          amet sint. Velit officia consequat <br /> 
          duis enim velit mollit. Exercitation <br />
           veniam consequat.”  </Typography></div>
      <div className="image">
        <img
          src={artistLogo} 
          alt=""
          style={{ }}
        /></div>
      </Paper>
      

  
    </div>
  );
}