import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NavbarProfileMenu } from "./NavbarProfileMenu";
import { Searchbar } from "./Searchbar";

export function Navbar({ subreddit, setSubreddit}) {
    return (
        <div className="sticky top-0 inline-flex justify-between items-center bg-white h-[48px] w-screen z-20 shadow">
            <div className="ml-5"><Logo /></div> 
            <div className="container mx-5 flex-1 max-w-[654px]"><Searchbar subreddit={subreddit} setSubreddit={setSubreddit}/></div>
            <div className="mr-4 "><NavbarProfileMenu /></div>
        </div>
    )
}

export function HomeNavbar() {
    return (
        <div className="sticky top-0 inline-flex justify-between items-center bg-white h-[48px] w-screen z-20 shadow">
            <div className="ml-5"><Logo /></div> 
            <div className="container flex justify-center mx-5 max-w-[654px]"><SearchSubreddits /></div>
            <div className="mr-4 "><NavbarProfileMenu /></div>
        </div>
    )
}


function SearchSubreddits() {
    return (
        <div className="flex justify-center bg-blue-500  px-5 rounded-lg ">
            <Link to='/see'>
                <span className="flex my-1 p-1 bg-blue-500 text-white">
                <h3 className="text-white">Search subreddits</h3>
                <AiOutlineArrowRight className="ml-2 mt-1"/>
                </span>
            </Link>
        </div>
    )
}