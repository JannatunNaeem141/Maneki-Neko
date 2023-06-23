import React, { useState } from 'react'
import Header from '../Common/Header'
import { BsCheckLg } from 'react-icons/bs'
import { FiLink2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Staking from '../Staking/Staking'

function Home() {
  const [active, setActive] = useState('stake');

  return (
    <div className='bg-[#1d293b]'>
      <Header />

      <Staking />
    </div>
  )
}

export default Home