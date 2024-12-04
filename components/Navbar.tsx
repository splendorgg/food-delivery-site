'use client'
import { Button } from './Buttons/Button'
import { LiaShoppingBagSolid } from "react-icons/lia";
import DropDown from './Buttons/DropDown';
import Link from 'next/link';
import { IoPersonOutline } from "react-icons/io5";
import { getSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { Session } from 'next-auth';

function Navbar() {

    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            console.log(session);
            setSession(session);
        };

        fetchSession();
    }, []);


    return (
        <div className='sticky top-0 z-10'>
            <div className='flex justify-center sm:justify-between bg-[#fff] w-full h-14 items-center px-20 text-black drop-shadow-lg'>
                <div className=' sm:hidden fixed left-4 cursor-pointer hover:bg-gray-300 p-2 rounded-full transition-all duration-200'><Link href="/userlogin/login"><IoPersonOutline size={20} /></Link></div>
                <div>
                    <Link href="/">
                        <h1>Logo</h1>
                    </Link>
                </div>
                {!session ? (
                    <div className=' gap-4 items-center flex '>
                        <div className=' gap-4 items-center hidden sm:flex'>
                            <div className='hover:bg-gray-300 px-2 py-2 rounded-lg transition-all duration-200'><Link href="/menu">Menu</Link>
                            </div>
                            <button onClick={() => signIn()} className='py-1 border  border-black px-2 rounded-lg transition-all duration-200  transform hover:scale-105 [word-spacing:-5px]' >Log in</button>
                            <Button>Sign up</Button>
                            <DropDown />
                        </div>

                        <div className='fixed  right-4 cursor-pointer  hover:bg-gray-300 px-2 py-2 rounded-full transition-all duration-200 '>
                            <LiaShoppingBagSolid size={25} />
                        </div>
                    </div>
                ) : (
                    <div className='hidden sm:flex cursor-pointer hover:bg-gray-300 p-2 rounded-full transition-all duration-200'><Link href="/userlogin/login"><IoPersonOutline size={20} /></Link></div>
                )}
            </div>
        </div>
    )
}

export default Navbar