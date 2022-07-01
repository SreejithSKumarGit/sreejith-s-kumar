
import {HashLink as Link} from "react-router-hash-link";
import NavbarStyles from "./styles/Navbar.module.css";

function Navbar()
{
    return (

        <div className={NavbarStyles.NavContainer}>
            
            <div className={NavbarStyles.NavLinksContainer}>
                <Link className={NavbarStyles.Links} to="#home"smooth style={{textDecoration:"none", }}>HOME</Link>
                <Link className={NavbarStyles.Links} to="#about">ABOUT</Link>
                <Link className={NavbarStyles.Links} to="#skills" >SKILLS</Link>
                <Link className={NavbarStyles.Links} to="#projects" >PROJECTS</Link>
                <Link className={NavbarStyles.Links} to="#contacts" >CONTACT</Link>
            </div>
        </div>
    )
}
export default Navbar;