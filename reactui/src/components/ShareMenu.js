import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShareIcon from '@material-ui/icons/Share';
import LazyLoad from 'react-lazy-load';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
  TelegramIcon,
  TwitterIcon
} from "react-share";

export default function ShareMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const tags = "#popcorntales #movietime #moviereview #popcorn #letswatch";
  const shareUrl = "www.popcorntales.com/"+props.title.replace(/ /g, '%20');
  const quote = "I read a review of \""+props.title+"\". Let me know what you felt after reading it!!";
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
       <BottomNavigationAction label="Mail" icon={<ShareIcon />}  onClick={handleClick}/>

      {
      Boolean(anchorEl) && <Menu
        id="social-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem onClick={handleClose}>
        <TwitterShareButton url={shareUrl} quote={quote} className="social-media-icon"><TwitterIcon size={28} round/></TwitterShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <FacebookShareButton url={shareUrl} title={quote} hashtag={tags} className="social-media-icon"><FacebookIcon size={28} round/></FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <WhatsappShareButton url={shareUrl} title={quote} className="social-media-icon"><WhatsappIcon size={28} round/></WhatsappShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <TelegramShareButton url={shareUrl} title={quote} className="social-media-icon"><TelegramIcon size={28} round/></TelegramShareButton>
        </MenuItem>
      </Menu>}
    </div>
  );
}