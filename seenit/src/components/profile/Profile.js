
import catProfile from './cat-profile.jpg';
import {RiCopperCoinLine} from 'react-icons/ri';

export function Profile() {
    return (
        <div className="container mx-auto w-[95%] my-[5%] h-[70vh] bg-white rounded-md shadow">

            <div className="relative top-0 w-full h-1/4 rounded-md bg-gradient-to-br from-blue-500 to-blue-400">
                <h1 className="relative top-10 text-center text-3xl">Welcome Brandon!</h1>
                <div className="relative -bottom-12 left-2 w-[100px] h-[100px] border shadow"><img src={catProfile}/></div>
                <p className="relative top-12 left-2 text-sm text-gray-500">u/BrandonGrando</p>

                <div className='flex justify-between'>
                    <p> </p>

                    <span className='flex flex-col ml-20'>
                        Score 
                        <p className='inline-flex items-center text-blue-500'> <RiCopperCoinLine className='mr-2 text-black'/> 100</p>
                    </span>
                    
                    <span className='flex flex-col mr-5'>Profile age <p className='text-center'> <span className='text-blue-500'>20</span> days</p></span>
                </div>
            </div>

        </div>
    )
}