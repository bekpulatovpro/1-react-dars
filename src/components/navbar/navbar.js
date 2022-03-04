import "./navbar.css"
import LogoImg from "../../Assets/images/IMAGE.svg"

function Navbar()
{
    return(
        <nav className="navbar">
            <div className="container">
                <div className="navbar__inner">

                    <div className="navbar__left">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a className="nav__link" href="#link" >
                                    <img className="nav__img" src={LogoImg} alt="logo img" width={93} height={32}/>
                                </a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#link" alt="logo img">HOME</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#link" alt="logo img">ABOUT</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#link" alt="logo img">PRICING</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#link" alt="logo img">BLOG</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#link" alt="logo img">FAQ</a>
                            </li>
                            <li className="nav__item">
                                <a className="nav__link" href="#link" alt="logo img">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar__right">
                        <button className="nav__button">PURCHASE TEMPLATE</button>
                    </div>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;