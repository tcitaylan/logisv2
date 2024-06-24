// Breadcrumbs.js
import React from 'react';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/system';

const StyledBreadcrumbs = styled(MUIBreadcrumbs)(({ color, fontSize, fontWeight }) => ({
  height: '100%',  
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px', 
  color: color || 'white', 
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    fontSize: fontSize || '1.5rem', 
    fontWeight: fontWeight || 'normal', 
  },
  '& p': {
    color: 'inherit',
    fontSize: fontSize || '1.5rem',
    fontWeight: fontWeight || 'normal',
  },
  '& .MuiBreadcrumbs-separator': {
    color: 'inherit',
    fontSize: fontSize || '2rem',
    fontWeight: fontWeight || 'normal',
    marginLeft: '4px', 
  },
}));


function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <StyledBreadcrumbs  aria-label="breadcrumb" separator="" fontWeight="bold">
      {location.pathname === '/' ? (
          <Typography color="inherit">DASHBOARD</Typography>
        ):""
      }
      {/* <Link component={RouterLink} color="inherit" to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        Home
      </Link> */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return index === pathnames.length - 1 ? (
          <Typography color="inherit" key={to}>
            {value.toUpperCase()}
          </Typography>
        ) : (
          <Link component={RouterLink} color="inherit" to={to} key={to} style={{ color: 'inherit', textDecoration: 'none' }}>
            {value.toUpperCase()}
          </Link>
        );
      })}
    </StyledBreadcrumbs >
  );
}

export default Breadcrumbs;
