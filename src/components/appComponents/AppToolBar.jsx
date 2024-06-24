import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import Breadcrumbs from './Bradcrumbs';
import { useLocation } from 'react-router-dom';

const drawerWidth = 240;

export default function ApptToolBar(){
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  
    return (
    <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
              <Breadcrumbs />
          </Typography>
        </Toolbar>
      </AppBar>
    )
}