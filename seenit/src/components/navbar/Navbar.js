import { Logo } from "./Logo";

export function Navbar() {
    return (
        <div className="flex justify-between items-center bg-white h-[48px]">
            <div className="px-5"><Logo /></div> 
            <div className="px-5">Search bar</div>
            <div className="px-5">Profile</div>
        </div>
    )
}