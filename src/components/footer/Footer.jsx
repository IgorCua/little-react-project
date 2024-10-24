import { Box } from "@mui/material";

export default function Footer() {
    return (
        <Box 
            component={'footer'}
            sx={{
                width: '100%',
                height: '150px',
                backgroundColor: '#2196f3',
                display: 'flex',
                alignSelf: 'flex-end'
            }}
        >
            Footer
        </Box>
    )
}