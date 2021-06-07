 import React from 'react';
 import './Header.css';
 import SearchIcon from "@material-ui/icons/Search";
import ShopingBasketIcon from"@material-ui/icons/ShoppingBasket";
import { Link }  from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";
 
 function Header() {

    const [{basket,user},dispatch] = useStateValue();
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

     return (
         <div className="header">
             <div className="header__search">
                 <input className="header__searchinput" type="text" />
                 <SearchIcon className="header__searchIcon" />
             </div>
             <div className="header__nav">
                 <Link to={!user && '/login'}> {/* the to={!user && '/login'} this denotes if there is no user only then we be pushed to the login page */ }
                    <div onClick={handleAuthenticaton} className="header__option">
                        <span className="header__optionLineone">
                             Hello {!user ? '' : user.email}
                        </span>
                        <span className="header__optionLinetwo">{user ?'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                 </Link>                 

                 <Link to="/checkout">
                    <div className="header__optionBasket">
                      <ShopingBasketIcon  className="icon" />
                      <span className="header__basketCount">{basket?.length}</span>
                    </div>
                 </Link>
             </div>
         </div>

        
     )
 }
 
 export default Header
 