import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


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

function SubMenuTwo({item}) {
    //console.log(item.subNav2)
    const [subnav, setSubnav] = useState(false);
    //const [subnavTwo, setSubnavTwo] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
    //const showSubnavTwo = () => setSubnavTwo(!subnav);
  
    return (
      <>
        <SidebarLink to={item.path} onClick={item.subNav2 && showSubnav}>
          <div>
          {item.icon}
           
          </div>
          <div>
            {item.subNav2 && subnav
              ? item.iconOpen
              : item.subNav2
              ? item.iconClose
              : null}
          </div>
        </SidebarLink>
        {subnav &&
          item.subNav2.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
               
                <SidebarLabel>{item.title}</SidebarLabel>
               
              </DropdownLink>
            );
          })}
      </>
    );
  };
  
  export default SubMenuTwo