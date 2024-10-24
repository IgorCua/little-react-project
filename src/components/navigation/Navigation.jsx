import { List, ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav sx={{
            // width: '280px',
            display: 'flex',
            // flexWrap: 'wrap',
            flexDirection: 'row',
            gap: '20px',

            // '& li': {
            //     padding: '0',
            //     width: 'auto',
            // },

            '& a': {
                textDecoration: 'none'
            },

            '& a.active': {
                color: 'red'
            }
        }}>
            {/* <ListItem> */}
                <NavLink to={'/home'}>Home</NavLink>
            {/* </ListItem> */}
            {/* <ListItem> */}
                <NavLink to={'/second-page'}>Page 2</NavLink>
            {/* </ListItem> */}
            {/* <ListItem> */}
                <NavLink to={'/third-page'}>Page 3</NavLink>
            {/* </ListItem> */}
        </nav>
    )
}