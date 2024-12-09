import './HomeTabs.css'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div 
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function HomeTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs-panel">
    <Box
       sx={{ flexGrow: 1, bgcolor: '#F3F3F5', display: 'flex', flexDirection:'row', height: 600, width:'1000px', alignItems:'center', padding:0, gap:10 }}
    >
     <div className="tab-container">
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', 
           }}
      >
        
        <Tab label="Create an Account" sx={{fontSize:18, fontWeight:400, lineHeight:'145.5%', width: 300,
height: 35, textTransform: 'none', justifyContent: 'flex-start', gap: '10px', 
'& .MuiTab-wrapper': {  flexDirection: 'row', alignItems: 'center' }  }} icon={<AccountCircleIcon className='account' style={{ fontSize: '40px', color: ' #71767D',  }} />}
            iconPosition="start"  {...a11yProps(0)}  />
        <Tab label="Join an Event" sx={{fontSize:18, fontWeight:400, lineHeight:'145.5%', width: 250, height: 35,  textTransform: 'none', 
justifyContent: 'flex-start', gap: '10px', 
'& .MuiTab-wrapper': { flexDirection: 'row', alignItems: 'center' }  }} 
icon={<EventIcon style={{ fontSize: '40px', color: ' #71767D' }}  />}
            iconPosition="start" {...a11yProps(1)} /> 
        <Tab label="Submit Requirements" sx={{fontSize:18, fontWeight:400, lineHeight:'145.5%', width: 300, height: 35, textTransform: 'none', 
justifyContent: 'flex-start', gap: '10px', 
'& .MuiTab-wrapper': { flexDirection: 'row', alignItems: 'center' }  }}
 icon={<AssignmentIcon style={{ fontSize: '40px', color: ' #71767D' }}  />}
            iconPosition="start" {...a11yProps(2)} /> 
      
        <Tab label="Get Shortlisted" sx={{fontSize:18, fontWeight:400, lineHeight:'145.5%', width: 350, height: 35, textTransform: 'none', 
justifyContent: 'flex-start', gap: '10px', 
'& .MuiTab-wrapper': { flexDirection: 'row', alignItems: 'center' }  }} 
icon={<CheckCircleIcon style={{ fontSize: '40px', color: ' #71767D' }}  />}
            iconPosition="start" {...a11yProps(3)} />
      <Tab label="Get The Hiighest Votes" sx={{fontSize:18, fontWeight:400, lineHeight:'145.5%', width: 500,height: 35, textTransform: 'none', 
justifyContent: 'flex-start', gap: '10px', 
'& .MuiTab-wrapper': { flexDirection: 'row', alignItems: 'center' }  }} icon={<ThumbUpIcon style={{ fontSize: '40px', color: ' #71767D' }}  />}
            iconPosition="start" {...a11yProps(4)} style={{color:''}}/> 
            
      </Tabs>
      </div>
    
      <TabPanel value={value} index={0} >
       <div className="tabpanel-contentOne">
        <div className="icon-containerOne">
        <AccountCircleIcon className='account' style={{  }} />
        </div>
        <h2>Create an Account</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
          curabitur nulla justo tellus amet. Ut placerat <br />
          dolor massa metus quisque sodales semper. <br />
          Hac donec vulputate pharetra augue eu congue.</p>
      </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="tabpanel-contentTwo">
          <div className="icon-containerTwo">
          <EventIcon className='account'  style={{  }} />
          </div>
          <h2>Join an Event</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
          curabitur nulla justo tellus amet. Ut placerat <br />
          dolor massa metus quisque sodales semper. <br />
          Hac donec vulputate pharetra augue eu congue.</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="tabpanel-contentThree">
          <div className="icon-containerThree">
          <AssignmentIcon className='account' style={{  }}  />
          </div>
          <h2>Submit Requirements</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
          curabitur nulla justo tellus amet. Ut placerat <br />
          dolor massa metus quisque sodales semper. <br />
          Hac donec vulputate pharetra augue eu congue.</p>
          </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="tabpanel-contentFour">
          <div className="icon-containerFour">
          <CheckCircleIcon className='account' style={{ }}  />
          </div>
          <h2>Get Shortlisted</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
          curabitur nulla justo tellus amet. Ut placerat <br />
          dolor massa metus quisque sodales semper. <br />
          Hac donec vulputate pharetra augue eu congue.</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div className="tabpanel-contentFive">
          <div className="icon-containerFive">
          <ThumbUpIcon className='account' style={{  }}  />
          </div>
          <h2>Get The Highest Votes</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Sit <br />
          curabitur nulla justo tellus amet. Ut placerat <br />
          dolor massa metus quisque sodales semper. <br />
          Hac donec vulputate pharetra augue eu congue.</p>
         </div>
      </TabPanel>
      
    </Box>
    </div>
  );
}