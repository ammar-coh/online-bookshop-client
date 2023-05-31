import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Products',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Add Products',
        path: '/products/add',
        iconClose: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
      
       subNav2: 
          [{  title: 'Del Products',
          path: '/products/del',
            },
           
         ]
     },
     {
      title: 'More ',
      path: '/products/add',
      iconClose: <RiIcons.RiArrowDownSFill />,
  iconOpen: <RiIcons.RiArrowUpSFill />,
    
     subNav2: 
        [{  title: 'Del Products',
        path: '/products/del',
          },
         
       ]
   },
   {
    title: 'Extra ',
    path: '/products/add',
    iconClose: <RiIcons.RiArrowDownSFill />,
iconOpen: <RiIcons.RiArrowUpSFill />,
  
   
 },
    ]
  },
  {
    title: 'Checkout',
    path: '/checkout',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
    {title:'Deleted Cart Items',
    path:'/checkout/delete',
    iconClose: <RiIcons.RiArrowDownSFill />,
    iconOpen: <RiIcons.RiArrowUpSFill />,
    subNav2: 
          [{  title: 'Del Products',
          path: '/products/del',
            },
         ]},
         {title:' Cart Items',
         path:'/checkout/delete',
         iconClose: <RiIcons.RiArrowDownSFill />,
         iconOpen: <RiIcons.RiArrowUpSFill />,
        
            }
    
    ,
   ]
  },
]