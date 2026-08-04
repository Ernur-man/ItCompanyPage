import { NavLink } from "react-router-dom";
import "./header.less";
import logo from "../assets/logo_itm.webp";
import { Link } from "react-router-dom";

export default function Header() {
    const menu = ["HOME", "ABOUT", "SERVICES", "CONTACT"];

    return (
        <header>
            <div className="container">
                <Link to="/itmnew2/">
                    <img src={logo} alt="Logo" loading="lazy"/>
                </Link>

                <nav>
                    {menu.map((item) => {
                        const path =
                            item === "HOME"
                                ? "/itmnew2/"
                                : `/itmnew2/${item.toLowerCase()}`;

                        return (
                            <NavLink
                                key={item}
                                to={path}
                                end={item === "HOME"}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
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
