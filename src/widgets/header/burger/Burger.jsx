import { useState, useEffect } from 'react';
import HeaderNav from "../headerNav/HeaderNav";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import "./burger.scss";
import Lang from '../lang/Lang';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.menu__box') && !event.target.closest('.menu__btn')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="burger-menu">
      <label 
        className="menu__btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={isOpen ? 'active' : ''}></span>
      </label>

      <div className={`menu__box ${isOpen ? 'open' : ''}`}>
        <div className='langg'>
          <Lang />
        </div>
        <HeaderNav onLinkClick={() => setIsOpen(false)} />
        <div className="icons">
          <div className="locates">
            <MdOutlineLocationOn size={20} />
          </div>
          <div className="locates">
            <MdOutlinePhone size={20} />
          </div>
          <div className="locates">
            <FaInstagram size={20} />
          </div>
          <div className="locates">
            <FaFacebook size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;

