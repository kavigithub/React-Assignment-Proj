import reactLogo from "../img/kavita-logo.png";
import Title from './Title'

const Header = () => {
    return(
        <header className="headerContent">
            <Title imgPath={reactLogo}/>
            <div className="nav-bar">
            <ul>
                <li><a></a>Home</li>
                <li>About Us</li>
                <li>Content us</li>
                <li>Cart</li>
            </ul>
            </div>
        </header>
    )
 }

export default Header;