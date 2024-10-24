import { Box, Typography } from "@mui/material";

export default function Card({ number }) {
    return (
        <Box sx={{
            width: '150px',
            height: '200px',

            border: '1px solid grey'
        }}>
            <Typography>Card {number}</Typography>
        </Box>
    );
}
