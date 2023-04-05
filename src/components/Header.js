import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {B, BsBag} from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import Logo from '../img/BROAD.svg';
import '../glitch.css';

const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
  <header className={`${isActive  ? 'bg-white py-4 shadow-md' : 'bg-none py-6'} fixed w-full z-10 transition-all rounded-xl `}>
    <div className='container mx-auto flex items-center justify-between h-full' >
      {/* Logo */}
    <Link to={'/'}>
      <div>
        <img className='w-[100px]' src={Logo} alt=""/>
      </div>
    </Link>
    <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative' >
      <BsBag className='text-2xl'/>
      <div className=' bg-green-800 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center' >{ itemAmount }</div>
      </div>
    </div>
  </header>
  );
};

export default Header;
