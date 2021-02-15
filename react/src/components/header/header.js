import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../CSS/Header.css'


class Header extends Component {
    render() {
        return (
            <Menu>
               
                <Menu.Item>
                    <NavLink to={"/login"}><Button style={{ marginLeft: "0vw" }}>התחברות</Button></NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to={"/sign"}><Button color='teal' >הרשמה</Button></NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to={"/homepage"}>דף הבית</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to={"/about"}>אודות</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to={"/main"}>תפריט אונליין</NavLink>
                </Menu.Item>

                 <Menu.Item>
                    <NavLink to={"/sign"}>גלריה</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to={"/sign"}>המלצות</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to={"/sign"}>צור קשר</NavLink>
                </Menu.Item>
                <NavLink to={"/homepage"}><img src={logo} style={{ width: "202px", height: "94px", "margin-right": "11vw" }}></img></NavLink>

      



            </Menu>
        )
    }
}

export default Header;
