import Image from 'next/image'
import banner from '@/img/banner.jpeg'
import { TbCurrentLocation } from "react-icons/tb";
import { Button } from 'antd';
import Link from 'next/link';

function Banner() {
    return (
        <>
            <div className='relative w-full h-[540px] overflow-hidden '>
                <Image src={banner} alt="banner" className='absolute w-full h-full object-cover brightness-[65%] ' />

                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center '>
                    <h1 className='text-4xl font-bold text-center text-white'>Food or groceries, all your needs are at your door!</h1>
                    <div className='flex w-[400px] sm:w-[550px] bg-white p-3 rounded-md gap-4 mt-4 shadow-lg  items-center '>
                        <div className="input-container w-[350px] sm:w-[450px] relative">
                            <input  
                                type="text"
                                className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                                placeholder=""
                            />
                            <label className='text-sm sm:text-base label absolute top-3 sm:top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                                pointer-events-none items-center px-1 gap-2 '>Enter your delivery address </label>
                            <div className='absolute right-2 top-3 '>
                                <TbCurrentLocation color='red' />
                            </div>
                        </div>
                        <Link href="/menu">
                            <Button type='primary' className='text-white bg-[#e21b70] w-[80px] h-[40px]'>Search</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner