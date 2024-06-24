import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import { approutes } from 'routes';
import {financeroutes } from 'financeroutes';
import { operationroutes } from 'operationroutes';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//icons
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import { Typography } from '@mui/material';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
      <ListItem key="dashboard" disablePadding>
            <ListItemButton component={Link} to="/" element=''>
              <ListItemIcon>
                {<SpaceDashboardIcon />}
              </ListItemIcon>
              <ListItemText primary='Board' />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider />
      {/* RESOURCES */}
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            RESOURCES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {approutes.map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={route.path}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItemIcon>
                    {<route.icon />}
                  </ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* OPERATION */}
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>OPERATION</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <List>
              {operationroutes.map((route, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={route.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <ListItemIcon>
                      {<route.icon />}
                    </ListItemIcon>
                    <ListItemText primary={route.name} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </AccordionDetails>
      </Accordion>

      {/* FINANCE */}
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            FINANCE
          </Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <List>
            {operationroutes.map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={route.path}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <ListItemIcon>
                    {<route.icon />}
                  </ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      
      {/* <Divider /> */}
    </div>
  );

  return (
    <Box >      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}          
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
