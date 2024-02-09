
import React from 'react';
import logo from '../../../assets/logo.svg';
import { PiUsersBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { BsWallet } from "react-icons/bs";
import { IoIosTrendingUp } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:text-primary hover:no-underline';
const buttonClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-white hover:text-red hover:no-underline';
const navItems = [
 {
  name: 'dashboard',
  label: 'Dashboard',
  path: '/dashboard',
  icon: <RxDashboard/>
 },
 {
  name: 'users',
  label: 'Users',
  path: "/dashboard/users",
  icon: <PiUsersBold />
 },
 {
  name: 'revenue',
  label: 'Revenue',
  path: '/dashboard/revenue',
  icon: <BsWallet /> 
 },
 {
  name: 'metrics',
  label: 'Metrics',
  path: '/dashboard/metrics',
  icon: <IoIosTrendingUp /> 
 },
 {
  name: 'settings',
  label: 'Settings',
  path: '/dashboard/settings',
  icon: <CiSettings />
 }
];

function SidebarLink({ item }) {
  const { pathname } = useLocation(); 
  return (
    <li>
      <Link to={item.path} className={classNames(pathname === item.path ? 'text-primary bg-white hover:bg-white' : '',linkClasses)}>
        <span className='text-xl'>{item.icon}</span> {item.label}
      </Link>
    </li>
  );
}

export const SideNav = () => {
  return (
    <>  
     <div>
        <img src={logo} alt="Logo" />
      <ul className='flex-1 py-8 flex flex-col gap-3'>
        {navItems.map((item) => (
          <SidebarLink key={item.name} item={item} />
        ))}
       <button className={buttonClasses}><IoIosLogOut /> Logout</button>
      </ul>
     </div>
    </>
  );
};

export default SideNav;