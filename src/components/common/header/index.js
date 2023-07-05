import React from 'react'
import "./header.css";
const Header = () => {
  return  (<div className='max-width header'>
    <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
    alt='Zomato-logo'
    className='header-logo'
    />
    <div className='header-right'>
      <div className='header-location-search-container'>
      <div className='location-wrapper'>
        <div className='location-icon-name'>
        <i className='fi fi-rr-marker absolute-center location-icon'></i>
        <div>Banglore</div>
      </div>
      <i className='fi fi-rr-caret-down absolute-center'></i>
      </div>
      <div className='location-search-seperator'></div>
      <div className='header-searchBar'>
        <i className='fi fi-rr-search absolute-center search-icon'></i>
        <input placeholder='Search for restaurant, cuisine or a dish'
        className='search-input'/>
      </div>
      </div>
      <div className='profile-wrapper'>
       <img src='https://img.icons8.com/?size=1x&id=EPSIbGJ2mOs9&format=png'
        alt='Profile'
       className='header-profile-image'
       />
       <span className='header-user-name'>Farhan</span>
       <i className="fi fi-rr-angle-small-down absolute-center profile-options-icon"></i>
      </div>
    </div>
  </div>
  );
};

export default Header;
