import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <NavLink>HOME</NavLink>
            <NavLink>POSTS</NavLink>
            <NavLink>CHI SIAMO</NavLink>
            <NavLink>SCOPRI DI PIU</NavLink>
        </div>
    )
}