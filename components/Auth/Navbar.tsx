import DropDown from '@/components/Buttons/DropDown'
import Link from 'next/link';

function Navbar() {
    return (
        <div className='sticky top-0 z-10'>
            <div className='flex justify-between bg-[#fff] w-full h-14 items-center px-20 text-black drop-shadow-lg'>
                <div>
                    <Link href="/">
                        <h1>Logo</h1>
                    </Link>
                </div>
                <div className='flex gap-4 items-center'>
                    <DropDown />

                </div>
            </div>
        </div>
    )
}

export default Navbar