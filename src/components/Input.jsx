import { TextField } from "@mui/material";
import Box from '@mui/material/Box';

export default function Input({label, ...props}){
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >      
            <TextField id={label} label={label} variant="standard" />
        </Box>        
    );
}