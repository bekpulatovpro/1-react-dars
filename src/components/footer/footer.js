import "./footer.css"
import LogoImg from "../../Assets/images/IMAGE.svg"



function footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__left">
                    <a className="footer__link" href="#link" >
                                    <img className="nav__img" src={LogoImg} alt="logo img" width={93} height={32}/>
                                </a>
                        </div>
                    <div className="footer__right">
                        <ul className="footer__list">
                        <li className="footer__item">
                                <a className="footer__link" href="#link" alt="logo img">style-guide</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#link" alt="logo img">licence</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#link" alt="logo img">changelog</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#link" alt="logo img">terms</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#link" alt="logo img">password</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link" href="#link" alt="logo img">404</a>
                            </li>
                            </ul>

                        </div>
                    
                    </div>
                   
                
                </div>
            </footer>
    )


}

export default footer;