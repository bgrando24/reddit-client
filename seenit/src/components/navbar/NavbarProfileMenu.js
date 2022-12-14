import { useState } from 'react';
import {CgProfile} from 'react-icons/cg';
import { ProfileDropdown } from './ProfileDropdown';
import './ProfileMenu.css';

export function NavbarProfileMenu() {

    // state to control arrow animation
    const [menuOpen, setMenuOpen] = useState(false);

    // controls changing state to open/close menu
    const handleMenuClick = () => {
        if (!menuOpen) {
            document.getElementById("navbar-profile-menu-arrow-left").classList.add("open-left");
            document.getElementById("navbar-profile-menu-arrow-right").classList.add("open-right");
            setMenuOpen(!menuOpen);
        } else {
            document.getElementById("navbar-profile-menu-arrow-left").classList.remove("open-left");
            document.getElementById("navbar-profile-menu-arrow-right").classList.remove("open-right");
            setMenuOpen(!menuOpen);
        }
        
    }

    
    return (
        <>
        <div onClick={handleMenuClick} className='flex items-center cursor-pointer'>
            <CgProfile size="22" className='dark:text-white'/>
            <ProfileMenuArrow menuOpen={menuOpen}/> 
        </div>

        <ProfileDropdown menuOpen={menuOpen}/>
        </>
    )
}


// The arrow next to the profile icon
function ProfileMenuArrow({ menuOpen }) {

    return (
        <>
            <div id='navbar-profile-menu-arrow-left' className='bg-black h-[2px] w-3 transition rotate-45 translate-x-1 dark:bg-white'></div>
            <div id='navbar-profile-menu-arrow-right' className='bg-black h-[2px] w-3 transition -rotate-45 dark:bg-white'></div>
        </>
    )
}


// menu pop-up when profile menu icon is clicked
function ProfileMenu() {
    return (
        <div>
            profile menu
        </div>
    )
}