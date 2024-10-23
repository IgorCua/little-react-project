import { Outlet } from "react-router";

export default function Header() {
    return (
        <div>
            <p>Header</p>
            <Outlet/>
        </div>
    )
}