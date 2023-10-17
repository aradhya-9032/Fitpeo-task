

// Navbar.js
import React from 'react';
import Profile from './profile.png'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StoreIcon from '@mui/icons-material/Store';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Navbar = () => {
    return (
      <div className="navbar">
        <List component="nav">
        <h1>Dashboard</h1>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon className='icons' />
            </ListItemIcon>
            <ListItemText primary="Dashboard" className='right-nav-icon' />
            <ListItemIcon>
              <ChevronRightIcon className="right-icon"  /> 
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StoreIcon  className='icons'/>
            </ListItemIcon>
            <ListItemText primary="Product" className='right-nav-icon' />
            <ListItemIcon>
              <ChevronRightIcon className="right-icon" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PeopleIcon className='icons' />
            </ListItemIcon>
            <ListItemText primary="Customers" className='right-nav-icon' />
            <ListItemIcon>
              <ChevronRightIcon className="right-icon" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AttachMoneyIcon className='icons' />
            </ListItemIcon>
            <ListItemText primary="Income" className='right-nav-icon' />
            <ListItemIcon>
              <ChevronRightIcon className="right-icon" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarIcon className='icons' />
            </ListItemIcon>
            <ListItemText primary="Promote" className='right-nav-icon' />
            <ListItemIcon>
              <ChevronRightIcon className="right-icon" />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HelpIcon  className='icons'/>
            </ListItemIcon>
            <ListItemText primary="Help" className='right-nav-icon'/>
            <ListItemIcon>
              <ChevronRightIcon className="right-icon" />
            </ListItemIcon>
          </ListItem>

        </List>
        <ListItem button style={{position:"relative",top:"20rem",background:"rgb(45, 89, 134)",borderRadius:"20px"}}>
            <div  style={{border:"1px solid grey",width:"40px",height:"40px",borderRadius:"50px"  }}>
              <img src={Profile} style={{width:"40px",height:"40px",borderRadius:"50px" ,marginTop:"9px"}}/>
            <p style={{fontSize:"13px", marginTop:"-38px",color:"wheat"}}>ProjectManger</p>
            </div>
            <ListItemText primary="Ardhya" style={{marginLeft:"10px",marginTop:"-20px"}}/> <ExpandMoreOutlinedIcon />
          </ListItem>
      </div>
    );
  };
  
  export default Navbar;

