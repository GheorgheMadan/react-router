import { NavLink, Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div>
            <li><NavLink to='/'>HOME</NavLink></li>
            <li><NavLink to='posts'>POSTS</NavLink></li>
            <li><NavLink to='chiSiamo'>CHI SIAMO</NavLink></li>
            <li><NavLink to='scopriDiPiu'>SCOPRI DI PIU'</NavLink></li>
        </div>
    )
}