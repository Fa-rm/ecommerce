import React, { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import {B, BsBag} from 'react-icons/bs';

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return ( 
  <div>
    <div className='bg-pink-200'>Header</div>
    <div onClick={()=> setIsOpen(!isOpen)} className='cursor-pointer flex relative' ><BsBag className='text-2xdl'/></div>
  </div>
  );
};

export default Header;
