'use client'
import { Session } from 'next-auth'
import { getSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()



    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await signIn('signin', {
            email,
            password,
            redirect: false
        })

        if (res?.error) {
            setError('Invalid email or password')
            console.log(error);
        } else {
            router.push('/')
        }
    }
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            setSession(session);
        };

        fetchSession();
    }, []);



    return (
        <div className='flex bg-white items-center justify-center min-h-screen'>
            <div className='bg-white max-w-[400px] basis-[350px] p-8 flex flex-col shadow-2xl rounded-lg  items-center'>
                {!session ? (
                    <form onSubmit={handleLogin} className='flex flex-col gap-4 w-full'>
                        <h2 className='text-3xl  mx-auto'>Login</h2>
                        <div className='flex flex-col gap-4'>
                            <div className="input-container  relative">
                                <input
                                    required
                                    type="email"

                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                                    placeholder=""
                                />
                                <label className='label absolute top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                  pointer-events-none items-center px-1 gap-2 '>Email </label>
                            </div>
                            <div className="input-container  relative">
                                <input
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    className="input w-full h-[40px] py-2 px-2 border-solid border-2 rounded-md text-black "
                                    placeholder=""
                                />
                                <label className='label absolute top-2 left-2 flex bg-white text-[#999] transition-all duration-200 ease-in-out
                  pointer-events-none items-center px-1 gap-2 '>Password </label>
                            </div>
                            <div className='flex justify-between text-sm' style={{ wordSpacing: '-5px' }}>
                                <div>
                                    <input type="checkbox" className='mr-2' />
                                    <label>Remember me</label>
                                </div>
                                <p className='text-[#e21b70] underline cursor-pointer hover:text-[#bb185f]'>Forgot password?</p>
                            </div>
                            <button type='submit' className='bg-[#e21b70] text-white py-2 rounded-lg hover:bg-[#bb185f]'>Login</button>
                            <p className='text-sm text-[#6e6e6e]'>Don&apos;t have an account? <Link href='/userlogin/signup'> <span className='text-[#e21b70] underline cursor-pointer hover:text-[#bb185f]'>Sign up</span></Link></p>

                        </div>
                    </form>
                ) : (
                    <button onClick={() => signOut()}>Sign out</button>)}
            </div>
        </div>
    )
}

export default SignIn

