import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { Icon, List, ListItem } from "@mui/material";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <PageWrapper>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <AdbIcon
                            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                        />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/home"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>

                        <Box
                            sx={{
                                // flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                                alignSelf: 'end'
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                    textDecoration: "none",
                                }}
                            >
                                <MenuItem
                                    key={"home"}
                                    onClick={handleCloseNavMenu}
                                >
                                    <NavLink to={"/home"}>
                                        <Typography
                                            sx={{ textAlign: "center" }}
                                        >
                                            HOME
                                        </Typography>
                                    </NavLink>
                                </MenuItem>
                                <MenuItem
                                    key={"second-page"}
                                    onClick={handleCloseNavMenu}
                                >
                                    <NavLink to={"/home"}>
                                        <Typography
                                            sx={{ textAlign: "center" }}
                                        >
                                            PAGE 2
                                        </Typography>
                                    </NavLink>
                                </MenuItem>
                                <MenuItem
                                    key={"third-page"}
                                    onClick={handleCloseNavMenu}
                                >
                                    <NavLink to={"/home"}>
                                        <Typography
                                            sx={{ textAlign: "center" }}
                                        >
                                            PAGE 3
                                        </Typography>
                                    </NavLink>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <AdbIcon
                            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/home"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "inherit",
                                textDecoration: "none",
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box
                            sx={{
                                // flexGrow: 1,
                                display: { xs: "none", md: "flex" },

                                "& a": {
                                    textDecoration: "none",
                                    color: "white",
                                },

                                "& a.active": {
                                    color: "red",
                                },

                            }}
                        >
                            <Button
                                key={"home"}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                <NavLink to={"/home"}>Home</NavLink>
                            </Button>
                            <Button
                                key={"second-page"}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                <NavLink to={"/second-page"}>Page 2</NavLink>
                            </Button>
                            <Button
                                key={"third-page"}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: "white",
                                    display: "block",
                                }}
                            >
                                <NavLink to={"/third-page"}>Page 3</NavLink>
                            </Button>
                        </Box>
                    </Toolbar>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}>
                        <List sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '70px',

                            '& li': {
                                padding: '0'
                            },

                            '& button': {
                                // width: '50px',
                                // height: '50px'
                            },

                            '& svg':{
                                width: '60px',
                                height: '60px'
                            }
                        }}>
                            <ListItem>
                                <IconButton>
                                    <AnalyticsIcon />
                                </IconButton>
                            </ListItem>
                            <ListItem>
                                <IconButton>
                                    <AnalyticsIcon />
                                </IconButton>
                            </ListItem>
                            <ListItem>
                                <IconButton>
                                    <AnalyticsIcon />
                                </IconButton>
                            </ListItem>
                            <ListItem>
                                <IconButton>
                                    <AnalyticsIcon />
                                </IconButton>
                            </ListItem>
                            <ListItem>
                                <IconButton>
                                    <AnalyticsIcon />
                                </IconButton>
                            </ListItem>
                        </List>
                    </Box>
                </Container>
            </AppBar>
            <Outlet />
        </PageWrapper>
    );
}
export default Header;
