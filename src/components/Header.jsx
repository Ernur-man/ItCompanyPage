import { NavLink, useLocation } from "react-router-dom";
import './header.less'
import logo from '../assets/logo_itm.webp'
import { useEffect } from "react";

export default function Header() {
    const location = useLocation();

    const menu = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

    useEffect(()=>{

    }, [location.pathname])

    return (
        <header>
            <div className="container">
                <img src={logo} alt="Logo" />
                <nav>
                    {menu.map((item) => {
                        const path =
                            item === "HOME"
                                ? "/itmnew2/HOME"
                                : `/itmnew2/${item.toLowerCase()}`;

                        return (
                            <NavLink
                                key={item}
                                to={path}
                                className={location.pathname === path ? "active" : ""}
                            >
                                {item}
                            </NavLink>
                        );
                    })}
                </nav>
            </div>
        </header>
    );
}
