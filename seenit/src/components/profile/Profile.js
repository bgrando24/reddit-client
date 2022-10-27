
import catProfile from './cat-profile.jpg';
import {RiCopperCoinLine} from 'react-icons/ri';
import { Socials } from './Socials';
import { Link } from 'react-router-dom';

export function Profile() {
    return (
        <div className="container relative mx-auto w-[95%] my-[5%] h-[70vh] bg-white rounded-md shadow dark:bg-[#1B1A1B] dark:text-white">

            <div className="relative top-0 w-full h-1/4 rounded-md bg-gradient-to-br from-blue-500 to-blue-400">
                <h1 className="relative top-10 text-center text-3xl">Welcome Brandon!</h1>
                <div className="relative -bottom-12 left-2 w-[100px] h-[100px] border shadow"><img src={catProfile}/></div>
                <p className="relative top-12 left-2 text-sm text-gray-500">u/BrandonGrando</p>

                <div className='flex flex-wrap'>

                    <div className='flex justify-between w-full'>

                        <p> </p>

                        <span className='flex flex-col ml-20'>
                            <span className='font-bold'>Score</span> 
                            <p className='inline-flex items-center text-blue-500'> <RiCopperCoinLine className='mr-2 text-black dark:text-white'/> 100</p>
                        </span>
                        
                        <span className='flex flex-col mr-5'> 
                            <span className='font-bold'>Profile age</span> 
                            <p className='text-center'> 
                                <span className='text-blue-500'>20</span> days
                            </p>
                        </span>
                    </div>

                    <div className='w-full my-10 flex justify-center'>
                        <Link to='reddit-client/' className=' flex items-center bg-orange-600 px-10 py-2 text-white font-bold rounded-3xl hover:bg-orange-700 duration-150'>
                            Home
                        </Link>
                    </div>

                </div>

            </div>

            <Socials />

        </div>
    )
}