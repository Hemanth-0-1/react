import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaMobileAlt, FaTv, FaShoppingCart } from "react-icons/fa";
import { IoMdLaptop, IoIosLogOut } from "react-icons/io";
import { BsEarbuds } from "react-icons/bs";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { ImProfile } from "react-icons/im";

function Sidenavar() {
  return (
    <div className='side'>
      <ul>
        <li><h1>Menu</h1></li>
        <li>
          <NavLink to='/Dashboard' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <FaTachometerAlt /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/mobile' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <FaMobileAlt /> Mobile
          </NavLink>
        </li>
        <li>
          <NavLink to='/laptop' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <IoMdLaptop /> Laptop
          </NavLink>
        </li>
        <li>
          <NavLink to='/earbuds' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <BsEarbuds /> Earbuds
          </NavLink>
        </li>
        <li>
          <NavLink to='/tv' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <FaTv /> TV
          </NavLink>
        </li>
        <li>
          <NavLink to='/ref' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <CgSmartHomeRefrigerator /> Refrigerator
          </NavLink>
        </li>
        <li>
          <NavLink to='/Add' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
          <FaShoppingCart />Add  to Cart
          </NavLink>
        </li>
        <li>
          <NavLink to='/profile' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <ImProfile /> Profile
          </NavLink>
        </li>
        <li>
          <NavLink to='/' className={({ isActive }) => isActive ? 'nav active' : 'nav'}>
            <IoIosLogOut /> Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidenavar;