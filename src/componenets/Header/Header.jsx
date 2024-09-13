import img from "../img/header_logo.png"
import "./header.css"

export default function Header() {
    return(
        <div>
            <header>
                <nav className="header_nav">
                    <a href="#!" className="logo">
                        <img src={img} alt="" />
                    </a>
                    <ul className="header-list">
                        <li className="item">
                            <a href="#!" className="link">MENU</a>
                        </li>
                        <li className="item">
                            <a href="#!" className="link">LOCATION</a>
                        </li>
                        <li className="item">
                            <a href="#!" className="link">ABOUT</a>
                        </li>
                        <li className="item">
                            <a href="#!" className="link">CONTACT</a>
                        </li>
                    </ul>
                    <button className="header_btn">Login</button>
                </nav>
            </header>
        </div>
    )
}