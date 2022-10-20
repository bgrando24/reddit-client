
import {CiSearch} from 'react-icons/ci';

import './Searchbar.css';

export function Searchbar() {
    return (
        <div className='flex-1 bg-gray-200 rounded-3xl w-full'>
            <form className='flex items-center'>

                <label for='searchbar'>
                    <CiSearch size="23" className='ml-2'/>
                </label>

                <div className="flex items-center cursor-pointer  bg-gray-200 rounded-3xl">
                        <input id='searchbar' type="text" placeholder="Search Seenit" className=' h-10 pl-4 bg-gray-200 rounded-3xl focus:border-orange-600'/>
                    </div>
            </form>
        </div>
    )
}


{/* <form>
    <label>
        <input />
    </label>
</form>


<div className="flex items-center cursor-pointer  bg-gray-200 rounded-3xl">
        <CiSearch size="23" className='mr-1'/>
            <input type='text' placeholder="Search Seenit" className=' h-10 pl-4 bg-gray-200 rounded-3xl'/>
        </div> */}