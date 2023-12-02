
import React from 'react' ;
import './Header.css' ;
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from "./firebase";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {

  const [{basket,user}, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className='header'>
       {/* Logo */ }
       <Link to = '/'>
       <img className='header_logo' src='https://images.unsplash.com/photo-1696539681566-98da5a8649c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60S'/>
       
       </Link>


    {/* Search Bar */}
    <div className='header_search'>
     <input className='header_searchInput' type='text'/>
    
     <SearchIcon className='header_searchIcon'/>
    
    </div>
    {/* After Search Bar */}
    <div className='header_nav'>
      <Link to = {!user && '/login'}>
      <div onClick={handleAuthenticaton} className='header_option'>
        {/* First icon */}
        <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
      </div>
      </Link >
      <div className='header_option'>
          {/* Second icon */}
        <span className='header_optionLineOne'>
          Returns
        </span>
        <span className='header_optionLineTwo'>
          & orders
        </span>
      </div>

      <div className='header_option'>
          {/* Third icon */}
        <span className='header_optionLineOne'>
          Buy with
        </span>
        <span className='header_optionLineTwo'>
          Bidding
        </span>
      </div>

     <Link to = '/checkout'>
     <div className='header_optionBasket'>
       <AddShoppingCartIcon />
       <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
       </div>
     </Link>

    </div>
    </div>
  )
}

export default Header