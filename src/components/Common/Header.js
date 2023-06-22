import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png';

function Header() {
  return (
    <div className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 py-5'>
        <div className='flex justify-between items-center'>
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
                <Link to='/mint' className='text-white font-medium text-base hover:text-[#8dc9be]  transition-all'>NFT Mint</Link>
                <Link to='/staking' className='text-white font-medium text-base hover:text-[#8dc9be]  transition-all'>Staking</Link>
            </div>
        </div>
    </div>
  )
}

export default Header