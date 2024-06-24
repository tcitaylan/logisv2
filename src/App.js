import 'App.css';
import Sidebar from 'components/appComponents/Sidebar'
import ApptToolBar from 'components/appComponents/AppToolBar';
import { Box, Toolbar  } from '@mui/material';
import { approutes } from 'routes.jsx';
import { Routes, Route } from "react-router-dom";
import Dashboard from 'views/Dashboard';


const drawerWidth = 240;

const switchRoutes = (
  <Routes>
    {approutes.map((prop, key) => {      
        return (
          <Route
            path={prop.path}
            element={<prop.component />} 
            key={key}
          />
        );
    })}
    <Route
            path="/"
            element={<Dashboard />} 
            key="Dashboard"
          />
  </Routes>
);

function App() {
  return (

    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: { sm: `${drawerWidth}px` }, // Adjust main content for sidebar width
          width: { sm: `calc(100% - ${drawerWidth}px)` }, // Adjust width for sidebar
        }}
      >
        {/* AppBar at the top */}
        <ApptToolBar />

        {/* Offset for AppBar height */}
        <Toolbar />
        
        {/* Page Content */}
        <Box sx={{ p: 3 }}>          
            {switchRoutes}          
        </Box>
      </Box>
    </Box>
  );
}

export default App;
