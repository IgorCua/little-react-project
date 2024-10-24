import { Box } from "@mui/material";

export default function PageWrapper({ children }) {
    return (
        <Box sx={{
                padding: "20px",
                margin: "auto",
                width: "100%",
                height: '100vh',
                minWidth: "280px",
                maxWidth: "1440px",
                display: "flex",
                flexDirection: 'column'
                // flexWrap: "wrap",
                // justifyContent: "space-between",

                // [theme.breakpoints.up("sm")]: {
                //     padding: "32px 32px",
                // },
            }}
        >
            {children}
        </Box>
    );
}
