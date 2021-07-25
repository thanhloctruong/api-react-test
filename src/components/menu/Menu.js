import React from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name : 'Trang chủ',
    to: '/',
    exact : true
  },
  {
    name : 'Quản lí sản phẩm',
    to : '/product-list',
    exact : false
  }
];
const MenuLink = ({label, to, exact}) =>{
  return(
    <Route
      path={to}
      exact = { exact}
      children = {({match}) => {
        var active = match ? 'active' : '';
        return (
          <li className = {active}>
            <Link to = {to} >
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}
const showMenu = (menus) => {
  var result = null;
  if(menus.length > 0){
    return result = menus.map((menu, index) => {
      return (
        <MenuLink 
          key ={index}
          label = {menu.name}
          to = {menu.to}
          exact = {menu.exact}
        />
      )
    });
  }
}
function Menu() {
  return (
    <div className="navbar navbar-default">
        <a className="navbar-brand">LOGO</a>
        <ul className="nav navbar-nav">
          {showMenu(menus)}
        </ul>
    </div>
  );
}
export default Menu;


