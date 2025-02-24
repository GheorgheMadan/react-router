import { NavLink, Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='posts'>POSTS</NavLink>
            <NavLink to='chiSiamo'>CHI SIAMO</NavLink>
            <NavLink to='scopriDiPiu'>SCOPRI DI PIU'</NavLink>
        </div>
    )
}