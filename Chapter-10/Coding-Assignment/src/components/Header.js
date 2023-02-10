import reactLogo from "../img/kavita-logo.png";
import Title from './Title'
import cartIcon from "../img/cart-icon.png";
import userLogin from "../img/in-user-account.png";
import userLogout from "../img/out-user-account.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Header = () => {
    const[isLogged, setIsLogged] = useState(false);

    const isOnline = useOnline();

    return(
        <header className="flex justify-between p-2 bg-lime-800 items-center">
            <Title imgPath={reactLogo}/>
            <div>
            <ul className="flex items-center">
                <li className="p-2">
                    <Link to="/" className="text-white">Home</Link>
                </li>
                <li className="p-2">
                    <Link to="/about" className="text-white">About Us</Link>
                </li>
                <li className="p-2">
                    <Link to="/contact" className="text-white">
                        Contact
                    </Link>
                </li>
                <li className="p-2">
                    {/* supposed this is your another big app */}
                    <Link to="/instamart" style={{color:'yellow'}}>
                           Instamart 
                    </Link>
                </li>
                <li className="p-2"><img src={cartIcon} alt="cart" style={{width:30}}/></li>
                <li className="p-2">
                    {
                        isLogged ?  
                       ( <button className='log-btn text-white flex' onClick={() => setIsLogged(false)}>Logout <img src={userLogout} alt="logout" style={{width:30, padding:'0px 5px'}}/></button>) : 
                       ( <button className='log-btn text-white flex' onClick={() =>  setIsLogged(true)}>Login <img src={userLogin} alt="logout" style={{width:30, padding:'0px 5px'}}/></button>)
                    }
                </li>
                <li className="p-2 text-white">{isOnline ? 'Welcome User ' : 'Sleepy User'}</li>
            </ul>
            </div>
        </header>
    )
 }

export default Header;