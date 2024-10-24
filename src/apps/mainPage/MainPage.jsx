import { Box, Container, Typography } from "@mui/material";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function MainPage() {
    return (
        <>
            <Box
                sx={{
                    height: "70vh",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Typography>Page Header</Typography>

                <Box
                    sx={{
                        margin: "0",
                        padding: "0",
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "28.5px",
                    }}
                >
                    {cards.map((e) => {
                        return <Card key={e} number={e} />;
                    })}
                </Box>
            </Box>
            <Footer />
        </>
    );
}
