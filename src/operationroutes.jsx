//icons
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import Drivers from "views/driver/Drivers";


export const operationroutes = [
    
    {
        path: "/drivers",
        name: "Maps",
        icon: AirlineSeatReclineExtraIcon,
        component: Drivers
    },
    {
        path: "/vehicles",
        name: "Tracking",
        icon: LocalShippingIcon,
        component: Drivers
    },
    {
        path: "/drivers",
        name: "Overview",
        icon: AirlineSeatReclineExtraIcon,
        component: Drivers
    },
    {
        path: "/vehicles",
        name: "Create",
        icon: LocalShippingIcon,
        component: Drivers
    },
    
]