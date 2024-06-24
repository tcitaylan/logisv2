//icons
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import Drivers from "views/driver/Drivers";


export const approutes = [
    
    {
        path: "/drivers",
        name: "Drivers",
        icon: AirlineSeatReclineExtraIcon,
        component: Drivers
    },
    {
        path: "/vehicles",
        name: "Vehicles",
        icon: LocalShippingIcon,
        component: Drivers
    },
    
]
