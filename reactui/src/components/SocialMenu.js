import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function SocialMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="social-menu" aria-haspopup="true" onClick={handleClick}>
        <AssistantPhotoIcon color={"primary"} fontSize={"default"}/>
      </Button>
      {
      Boolean(anchorEl) && <Menu
        id="social-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {/* <MenuItem onClick={handleClose}> 
        <a href="https://www.twitter.com/PopcornTaless" className="social-icon">
              <TwitterIcon fontSize={"default"}/>
          </a></MenuItem> */}
        <MenuItem onClick={handleClose}>
        <a href="https://www.facebook.com/popcorntales" className="social-icon">
              <FacebookIcon fontSize={"default"}/>
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <a href="https://www.instagram.com/popcorntaless" className="social-icon">
              <InstagramIcon fontSize={"default"}/>
          </a>
        </MenuItem>
      </Menu>}
    </div>
  );
}