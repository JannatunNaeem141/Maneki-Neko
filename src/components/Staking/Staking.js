import React, { useState } from 'react'
import Header from '../Common/Header'
import { BsCheckLg } from 'react-icons/bs'
import { FiLink2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Staking() {
    const [active, setActive] = useState('stake');

    return (
        <main className='pt-20 pb-24'>

            <section className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 py-5'>
                <h1 className='text-center uppercase font-bold lg:text-7xl md:text-5xl text-3xl mb-2 text-white'>
                    <span>Stake </span>
                    <span className='text-[#3ECCB0]'>Neko</span>
                </h1>
                <div className='flex justify-center mt-8'>
                    <div className='flex items-center gap-2 bg-[#0e1529] px-[0.6rem] py-[0.25rem] text-sm rounded-full'>
                        <div className='text-white bg-green-500 rounded-full text-sm p-[2px]'>
                            <BsCheckLg />
                        </div>
                        <div className='text-[#94A3B8]'>
                            Contract audited by
                            <Link to='#' className='text-white'> Solidity Finance</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 lg:mt-12 md:mt-10 mt-8'>
                <div className='flex justify-center'>
                    <div className='lg:w-1/2 md:w-4/5 w-full'>
                        <div className='bg-[#10172a] rounded-md'>
                            <ul className='flex items-center lg:gap-10 md:gap-8 gap-5 px-6 border-b border-b-[#f1cf6f] border-opacity-20'>
                                <li onClick={() => setActive('stake')} className={`text-[#94A3B8] text-base font-medium cursor-pointer pt-4 pb-4 ${active === 'stake' && 'text-white border-b border-b-[#f1cf6f]'}`}>Stake</li>
                                <li onClick={() => setActive('unstake')} className={`text-[#94A3B8] text-base font-medium cursor-pointer pt-4 pb-4 ${active === 'unstake' && 'text-white border-b border-b-[#f1cf6f]'}`}>Unstake</li>
                                <li onClick={() => setActive('nfts')} className={`text-[#94A3B8] text-base font-medium cursor-pointer pt-4 pb-4 ${active === 'nfts' && 'text-white border-b border-b-[#f1cf6f]'}`}>NFT's</li>
                                <li onClick={() => setActive('rewards')} className={`text-[#94A3B8] text-base font-medium cursor-pointer pt-4 pb-4 ${active === 'rewards' && 'text-white border-b border-b-[#f1cf6f]'}`}>Rewards</li>
                            </ul>
                            <div className='px-6 py-4'>
                                <div className={`${active === 'stake' ? 'block' : 'hidden'}`}>
                                    <div className='grid grid-cols-2 gap-5 mt-8'>
                                        <div>
                                            <p className='text-[#94A3B8]'>Total Shares</p>
                                            <p className='text-xl text-white font-semibold'>0.00</p>
                                        </div>
                                        <div>
                                            <p className='text-[#94A3B8]'>Your Shares</p>
                                            <p className='text-xl text-white font-semibold'>0.00 <span className='text-[#f1cf6f]'>/ 0%</span></p>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p className='text-[#94A3B8]'>Total Value Locked (TVL)</p>
                                        <p className='text-xl text-[#3eccb0] font-semibold'>$0.00</p>
                                    </div>
                                    <div className='mt-10'>
                                        <button className='flex items-center justify-center gap-2 bg-[#3ECCB0] hover:bg-[#3eccb0e4] transition-all px-2 py-3 w-full text-xl font-bold rounded-md'><FiLink2 className='text-2xl font-bold' /> Connect Wallet</button>
                                    </div>
                                </div>
                                <div className={`${active === 'unstake' ? 'block' : 'hidden'}`}></div>
                                <div className={`${active === 'nfts' ? 'block' : 'hidden'}`}></div>
                                <div className={`${active === 'rewards' ? 'block' : 'hidden'}`}></div>
                            </div>
                        </div>
                        <div className='mt-12'>
                            <p className='text-white text-xl font-medium'>Problems staking NEKO?</p>
                            <Link to='#' className='text-[#3eccb0] text-sm'>Checkout our FAQ's section for common questions and solutions</Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

export default Staking