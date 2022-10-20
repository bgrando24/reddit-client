// 252px wide 600px high

export function ProfileDropdown({ menuOpen }) {

    if (menuOpen) {
        return (
            <div className="fixed right-5 top-10 w-[252px] h-[600px] bg-white border border-gray-400 rounded-md z-10 duration-150">
                Menu
            </div>
        )

    } else {
        return (
            <div className=" content-none duration-150"></div>
        )
    }
        
}