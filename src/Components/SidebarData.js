import React from 'react';
import { TbCalendarDue } from "react-icons/tb";
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Calendar',
    path: '/calendar',
    icon: <AiIcons.AiTwotoneCalendar />    ,
    cName: 'nav-text'
  },
  {
    title: 'Due',
    path: '/due',
    icon: <TbCalendarDue />,
    cName: 'nav-text'
  }
];