import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png';
import './Header.css'

function Header() {
    return (
        <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 py-5 relative'>
            {/* Without Hamburger */}
            {/* <div className='flex justify-between items-center'>
                <div>
                    <Link to='/staking' className='flex items-center gap-2'>
                        <img src={Logo} alt='Logo' className='w-auto h-8' />
                        <div className='uppercase lg:flex items-center text-base font-black md:block hidden'>
                            <span className='text-[#f1cf6f]'>Maneki</span>
                            <span className='text-[#3eccb0]'>-Neko</span>
                        </div>
                    </Link>
                </div>
                <div className='flex items-center gap-10'>
                    <Link to='/nft-mint' className='text-white font-medium text-base hover:text-[#8dc9be]  transition-all'>NFT Mint</Link>
                    <Link to='/staking' className='text-white font-medium text-base hover:text-[#8dc9be]  transition-all'>Staking</Link>
                </div>
            </div> */}

            {/* With Hamburger */}
            <header class="lg:px-16 px-8  flex flex-wrap items-center py-4 md:shadow-none shadow-md absolute w-full md:bg-transparent bg-[#10172a]">
                <div class="flex-1 flex justify-between items-center">
                    <Link to='/staking' className='flex items-center gap-2'>
                        <img src={Logo} alt='Logo' className='w-auto h-8' />
                        <div className='uppercase lg:flex items-center text-base font-black md:block hidden'>
                            <span className='text-[#f1cf6f]'>Maneki</span>
                            <span className='text-[#3eccb0]'>-Neko</span>
                        </div>
                    </Link>
                </div>

                <label for="menu-toggle" class="pointer-cursor md:hidden block">
                    <svg class="fill-current text-white"
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />

                <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
                    <nav>
                        <ul class="md:flex items-center justify-between text-base gap-10 pt-8 md:pt-0">
                            <li><Link to='/nft-mint' className='text-white font-medium text-base hover:text-[#8dc9be]  transition-all'>NFT Mint</Link></li>
                            <li><Link to='/staking' className='text-white font-medium text-base hover:text-[#8dc9be]  transition-all'>Staking</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header