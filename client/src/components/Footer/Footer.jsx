import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <>
        <div className="footer center flex-container gap-10 column">
            <img src="footerlogo.png" alt="" />
            <h4>powered by namibra.inc</h4>
            <p>connect with us </p>

            <div className="flex-container gap-10 social_media">
                <Link to={''}>
                     <IoLogoFacebook/>
                </Link>
                <Link to={''}>
                     <IoLogoTwitter/>
                </Link>
                <Link to={''}>
                     <IoLogoInstagram/>
                </Link>
            </div>
        </div>
        </>
     );
}

export default Footer;