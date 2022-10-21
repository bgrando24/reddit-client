
import {FaCat} from 'react-icons/fa';

import {Link, Redirect} from 'react-router-dom';

export function Logo() {

    // handles redirecting user back to home page when logo is clicked
    // const logoRedirect = () => {
    //     <Redirect to='/' />
    // }

    return (
        <div className='cursor-pointer'>
            <Link to='/home'>
            <div className=' bg-blue-500 p-2 rounded-full'>
                <FaCat color='white'/>
            </div>
            </Link>
        </div>
    )
}