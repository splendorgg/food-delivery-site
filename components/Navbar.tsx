import { Button } from './Buttons/Button'
import { LiaShoppingBagSolid } from "react-icons/lia";
import DropDown from './Buttons/DropDown';
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";

function Navbar() {
    return (
        <div className='sticky top-0 z-10'>
            <div className='flex justify-center sm:justify-between bg-[#fff] w-full h-14 items-center px-20 text-black drop-shadow-lg'>
                <div className='fixed left-4 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition-all duration-200'><Link href="/auth/login"><IoPersonOutline size={20} /></Link></div>
                <div>
                    <Link href="/">
                        <h1>Logo</h1>
                    </Link>
                </div>
                <div className=' gap-4 items-center flex '>
                    <div className=' gap-4 items-center hidden sm:flex'>
                        <div><Link href="/menu">Menu</Link>
                        </div>
                        <Button variant='empty'>Log in</Button>
                        <Button>Sign up</Button>
                        <DropDown />
                    </div>

                    <div className='fixed  right-4 cursor-pointer  hover:bg-gray-300 px-2 py-2 rounded-full transition-all duration-200 '>
                        <LiaShoppingBagSolid size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar