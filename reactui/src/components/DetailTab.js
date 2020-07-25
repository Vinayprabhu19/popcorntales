import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import '../css/Detail.css';
import '../css/review.css';
import Review from './Review';
import Cast from './Cast';
import Ticket from './Ticket';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.primary
  },
}));

export default function FullWidthTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="Review" {...a11yProps(0)} className="tab"/>
          <Tab label="Hit & Miss" {...a11yProps(1)} className="tab"/>
          <Tab label="Cast & Crew" {...a11yProps(2)} className="tab"/>
          <Tab label="Ticket" {...a11yProps(3)} className="tab"/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <div className="review-component">
          { props.movie.review.synopsis.split("\n").map(para =>(
                <p key={para}>{para}</p>
            ))
          }
        </div>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
            <Review review={props.movie.review} title={props.movie.title}/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
            <Cast cast={props.movie.cast}/>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
        <Ticket ticketDetails={props.movie.ticketDetails}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}