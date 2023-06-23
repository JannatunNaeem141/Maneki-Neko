import React, { useState } from 'react'
import Header from '../Common/Header'
import { Link } from 'react-router-dom'
import { FiLink2 } from 'react-icons/fi'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import CatImage from '../../assets/catImg.jpg'

function NFTMint() {
    const [value, setValue] = useState(1);

    const handleMinus = () => {
        if (value > 0) {
            setValue(value - 1);
        }
    };

    const handlePlus = () => {
        if (value < 10) {
            setValue(value + 1);
        }
    };

    const handleChange = (e) => {
        let newValue = parseInt(e.target.value);
        if (newValue > 10 || newValue < 0) {
            window.alert('Value cannot be greater than 10 or less than 0');
        } else {
            setValue(newValue);
        }
    };

    return (
        <div className='bg-[#1d293b]'>
            <Header />

            <main className='pt-20 pb-24'>

                <section className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 py-5'>
                    <h1 className='text-center uppercase font-bold lg:text-7xl md:text-5xl text-3xl mb-2 text-white'>
                        <span>Mint </span>
                        <span className='text-[#3ECCB0]'>Nft</span>
                    </h1>
                    <div className='flex justify-center'>
                        <p className='text-[#94A3B8] lg:w-3/5 md:w-4/5 w-full text-center mt-5'>The Neko NFT offers 1.2x multiplier for staking rewards. Staking your tokens along with your Neko NFT amplifies the ETH rewards you'll receive, generating significant passive income.</p>
                    </div>
                    {/* <div className='flex justify-center mt-8'>
                        <div className='flex items-center gap-2 bg-[#0e1529] px-[0.6rem] py-[0.25rem] text-sm rounded-full'>
                            <div className='text-white bg-green-500 rounded-full text-sm p-[2px]'>
                                <BsCheckLg />
                            </div>
                            <div className='text-[#94A3B8]'>
                                Contract audited by
                                <Link to='#' className='text-white'> Solidity Finance</Link>
                            </div>
                        </div>
                    </div> */}
                </section>

                <section className='max-w-7xl lg:mx-auto md:mx-8 mx-5 lg:px-8 lg:mt-12 md:mt-10 mt-8'>
                    <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-12 md:gap-8 gap-8'>
                        <div>
                            <img src={CatImage} alt='CatImage' />
                        </div>
                        <div>
                            <div className='bg-[#10172a] rounded-md'>
                                <div className='flex items-center justify-between py-4 px-6 border-b border-b-[#f1cf6f] border-opacity-10'>
                                    <p className='text-[#94A3B8] text-sm'>Public Mint is Open!</p>
                                    <p className='bg-gray-500 text-white text-xs rounded-full py-[2px] px-2 font-medium'>0.4 ETH Each</p>
                                </div>
                                <div className='px-6 pt-8 pb-4 grid md:grid-cols-2 grid-cols-1 gap-5'>
                                    <div className='bg-[#192032] p-5 rounded-md'>
                                        <p className='text-[#94A3B8] uppercase'>NFT Collection</p>
                                        <p className='text-white font-semibold text-2xl mt-1'>925</p>
                                    </div>
                                    <div className='bg-[#192032] p-5 rounded-md'>
                                        <p className='text-[#94A3B8] uppercase'>NFT Minted</p>
                                        <p className='text-white font-semibold text-2xl mt-1'><span className='text-[#3ECCB0] font-bold text-4xl'>0/</span>925</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 px-6'>
                                    <button
                                        onClick={handleMinus}
                                        className="text-[#94a3b85d] border-2 border-[#3ECCB0] border-opacity-25 px-5 py-1 rounded-md hover:border-opacity-40 transition-all"
                                    >
                                        <AiOutlineMinus />
                                    </button>
                                    <input
                                        type="number"
                                        max={10}
                                        min={0}
                                        value={value}
                                        onChange={handleChange}
                                        className="bg-[#0d1322] border-b border-b-[#3ECCB0] border-opacity-10 outline-none active:outline-none text-white w-full px-1 py-1"
                                    />
                                    <button
                                        onClick={handlePlus}
                                        className="text-[#94a3b85d] border-2 border-[#3ECCB0] border-opacity-25 px-5 py-1 rounded-md hover:border-opacity-40 transition-all"
                                    >
                                        <AiOutlinePlus />
                                    </button>
                                </div>
                                <div className='px-6 py-4'>
                                    <div>
                                        <button className='flex items-center justify-center gap-2 bg-[#3ECCB0] hover:bg-[#3eccb0e4] transition-all px-2 py-3 w-full text-xl font-bold rounded-md'><FiLink2 className='text-2xl font-bold' /> Connect Wallet</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default NFTMint