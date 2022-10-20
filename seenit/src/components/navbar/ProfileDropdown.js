
import {MdOutlineAccountCircle} from 'react-icons/md';
import {IoSettingsOutline, IoLogOutOutline} from 'react-icons/io5';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import { Link } from 'react-router-dom';


// Array to hold the options available in the profile menu
const profileMenuItems = [
    {name: "Profile",           icon: <MdOutlineAccountCircle />,   path: "/profile"},
    {name: "Settings",          icon: <IoSettingsOutline />,        path: "/settings"},
    {name: "About this app",    icon: <AiOutlineInfoCircle />,      path: "/about"},
    {name: "Logout",            icon: <IoLogOutOutline />,          path: "/logout"},
];



export function ProfileDropdown({ menuOpen }) {

    if (menuOpen) {
        return (
            <div className="fixed right-5 top-10 w-[252px] h-[90vh] max-h-[600px] bg-white border border-gray-400 rounded-md z-10 duration-150">
                <div className='flex flex-col justify-around h-full'>
                    {
                        profileMenuItems.map(item => {
                            return (
                                <div key={item.name} className='flex items-center bg-gray-100 h-[13%] mx-1 rounded-lg cursor-pointer hover:scale-95 hover:bg-gray-300 duration-150'>
                                    <Link to={item.path} className='flex items-center h-full w-full'>
                                        <span className='ml-4'>{item.icon}</span>
                                        <span className='ml-2'>{item.name}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )

    } else {
        return (
            <div className=" content-none duration-150"></div>
        )
    }
        
}