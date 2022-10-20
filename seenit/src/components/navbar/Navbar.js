import { Logo } from "./Logo";
import { NavbarProfileMenu } from "./NavbarProfileMenu";
import { Searchbar } from "./Searchbar";

export function Navbar() {
    return (
        <div className=" inline-flex justify-between items-center bg-white h-[48px] w-screen">
            <div className="ml-5"><Logo /></div> 
            <div className="container mx-5 flex-1 max-w-[654px]"><Searchbar /></div>
            <div className="mr-4 "><NavbarProfileMenu /></div>
        </div>
    )
}