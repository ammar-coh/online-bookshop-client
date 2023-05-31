import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    Nav: {
        background: '#15171c',
        height: '40px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    NavIcon: {
        marginLeft: '2rem',
        fontSize: '2rem',
        height: '80px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
   SidebarNav: {/*
        background: '#15171c;',
        width: '250px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left:  ({ sidebar }) => sidebar ? '0' : '-100%',
        transition: '350ms',
        zIndex: 10,
   */},
    price: {
      marginLeft: 13,
      fontSize: "15px",
    },
    input: {
      width: "60px",
      marginTop: 10,
      marginLeft: 22,
    },
  });
 





const SidebarNav = styled.nav`
  background: #f5f5f5;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  color:black
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const classes = useStyles();

  return (
    <>
      <IconContext.Provider value={{ color: '#FF9900' }}>
        <div className={classes.Nav}>
          <div className={classes.NavIcon} to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        < SidebarNav  sidebar={sidebar}>
          <SidebarWrap>
            <div className={classes.NavIcon} to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;