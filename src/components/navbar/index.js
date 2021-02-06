import React, { useState } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
export default function Navbar(props) {



    const [search, setSearch ] = useState(false)

    const openSearch = () =>{
        setSearch(true);
    }

    const onSearch = (e) => {
        e.preventDefault();
        alert('Searched');
    }

    const searchClass = search ? 'searchInput active' : 'searchInput'

    return (

        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form  onSubmit={onSearch}>
                    <input type="text" className={searchClass} placeholder="Search" />
                    <i onClick={openSearch} className="fa fa-search searchIcon" aria-hidden="true"></i>
                </form>
            
            </div>
        </div>
    )
}
