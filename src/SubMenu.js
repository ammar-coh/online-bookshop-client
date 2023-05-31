import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubMenuTwo from './SubMenu2'
const SidebarLink = styled(Link)`
  display: flex;
  color: #000000;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: 	#D3D3D3;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background:#D3D3D3 ;
    cursor: pointer;
   color: #000000
  }
`;

const SubMenu = ({ item }) => {
    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const [subnav, setSubnav] = useState(false);
  //const [subnavTwo, setSubnavTwo] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  //const showSubnavTwo = () => setSubnavTwo(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
              <SubMenuTwo item={item} key={index}/>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;