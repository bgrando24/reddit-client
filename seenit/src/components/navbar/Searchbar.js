
import  { Link, redirect } from 'react-router-dom';
import {CiSearch} from 'react-icons/ci';
import './Searchbar.css';

export function Searchbar({ subreddit, setSubreddit}) {
    return (

        <div className='flex-1 bg-gray-200 rounded-3xl w-full dark:bg-[#272729] dark:text-white'>

            <form
                onSubmit={e => {
                    e.preventDefault();
                    setSubreddit(e.target.searchbar.value); //gets the value from the input field 
                    }} 
                className='flex items-center border dark:border-gray-500 rounded-3xl'>

                <label htmlFor='searchbar'>
                    <button className='flex items-center' type='submit'> <CiSearch size="23" className='ml-2'/> </button>
                </label>

                <div className="flex items-center cursor-pointer bg-gray-200 rounded-3xl w-full dark:bg-[#272729] ">
                        <input 
                            id='searchbar' 
                            type="text" 
                            placeholder="Search Seenit" 
                            className=' h-10 w-full pl-4 bg-gray-200 rounded-3xl focus:border-orange-600 dark:bg-[#272729]'/>
                    </div>
            </form>
            
        </div>

    )
}
