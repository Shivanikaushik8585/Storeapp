import MaxWidthWrapper from "./maxWidth";
import Link from "next/link";
import Image from 'next/image'
import Items from "./Items";
import './logo.png'

import "./logo.png"
import { Icons } from "./Icon";
import { buttonVariants } from "./ui/button";
import Cart from "./Cart";

const Navbar = () => {
    const user  = null
    return ( 
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 ">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* Todo Mobile nav */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'>
                                   {/* <Icons.logo className='h-10 w-10'/> 
                                    */}
                                    {/* <Image src='/image/logo.png' width={100} height={100} alt="logo"/> */}

                         <h1 className=" text-blue-500  font-bold text-lg "> Kaushik Cloth Store</h1>
                         
                       </Link>
                       </div>
                       <div className="hidden z-50 lg:ml-8 text-gray-500 lg:block lg:self-stretch">
                        <Items/>
                            </div>

                       <div className="ml-auto flex  items-center">
                        <div className="hidden text-gray-800 lg:flex lg:flex-1 lg:items-center lg:justify-end  lg:space-x-6">
                        {user ? null : (
                    <Link
                      href='/sign-in'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Sign in
                    </Link>
                  )}
                  {user ? null : (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  )}
                   {user ? (
                    <p></p>
                  ) : (
                    <Link
                      href='/sign-up'
                      className={buttonVariants({
                        variant: 'ghost',
                      })}>
                      Create account
                    </Link>
                  )}
                  {user ? (
                    <span
                      className='h-6 w-px bg-gray-200'
                      aria-hidden='true'
                    />
                  ) : null}

                  {user ? null : (
                    <div className='flex lg:ml-6'>
                      <span
                        className='h-6 w-px bg-gray-200'
                        aria-hidden='true'
                      />
                    </div>
                  )}

<div className='ml-4 flow-root lg:ml-6'>
                    <Cart />
                  </div>

                       </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
     );
}
 
export default Navbar;