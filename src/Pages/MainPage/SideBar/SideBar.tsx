import { Component } from 'react';
import styles from "./SideBar.module.scss"
import ThreePSharpIcon from '@mui/icons-material/ThreePSharp';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import { Avatar, Toolbar, Typography } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
 import AccountCircleIcon from '@mui/icons-material/AccountCircle';
 import TungstenOutlinedIcon from '@mui/icons-material/TungstenOutlined';
 import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
 import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
 import ReceiptLongSharpIcon from '@mui/icons-material/ReceiptLongSharp';
import { Link } from 'react-router-dom';
import Logout from '../../../components/Logout/Logout';
// import KeepMountedModal from '../../../Components/Modal/Modal';
// import AdminProfile from '../AdminProfile/AdminProfile';
export default class SideBar extends Component {
  render() {
    return (
      <List
        sx={{ height: '100vh', width: '12rem', backgroundColor: 'black' }}
      >
        <ListItemButton sx={{ height: '5rem',marginLeft:"0rem", marginTop:"0rem", fontFamily: 'font-family: cursive;' }}>
          <Typography variant="h6" component="div" sx={{ color: 'white', textAlign: 'center', fontSize: '1.5rem', ml: '0.5rem' }}>
            MainPage
          </Typography>
        </ListItemButton>
        <ListItemButton sx={{ color: 'white', marginTop: '1rem', fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
          <ListItemIcon >
            <PeopleAltTwoToneIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <Link to="/mainPage/details"  className={styles.sideBar}>
            <ListItemText primary="Details"/>
          </Link>
        </ListItemButton>
        <ListItemButton sx={{ color: 'white', fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
        </ListItemButton>
        <ListItemButton sx={{ color: 'white', fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
        </ListItemButton>
        <ListItemButton sx={{ color: 'white', fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
          <ListItemIcon>
            <AssessmentOutlinedIcon sx={{ color: 'white' }} />
          </ListItemIcon>
          <Link to="/mainPage/reports" className={styles.sideBar}>
          <ListItemText primary="Reports" />
          </Link>
        </ListItemButton>
        <ListItemButton sx={{ color: 'white', fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
          <ListItemIcon>
          </ListItemIcon> 
        </ListItemButton>
        <ListItemButton sx={{ color: 'white', fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
        </ListItemButton>
        <ListItemButton sx={{ color: 'white', fontFamily: 'Georgia, "Times New Roman", Times, serif', mt: '16rem',position:"absolute",top:"45%"}}>
          <ListItemIcon sx={{ position:"absolute",top:"0%"}}>
            {/* <LogoutOutlinedIcon sx={{ color: 'white' }} /> */}
          </ListItemIcon>
          <ListItemText> <Logout/></ListItemText>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    )
  }
}