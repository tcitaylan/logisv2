import DriverForm from "components/form/Driverform"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DataGrid from 'components/DataGrid'


export default function Drivers(){
    return (
    <Box>
        <div>
            <h2>DRIVERS</h2>
        </div>
       
        <div>
          <DataGrid />
        </div>
        
      </Box>
    )
}