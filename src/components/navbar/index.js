import React, {useState} from 'react'
import "./navbarStyle.css"
import logo from "../../assets/logo.png"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'
import {IconContext} from "react-icons"
import {
    Navbarr,
    LogoContainer,
    Logo,
    MenuBars,
    Nav,
    NavMenuItem,
    LiNavbarToggle,
    LinkMenuIcon,
    CName
} from "./navbarElements"

const Navbar = () => {
    const [sidebar, setSidebar]=useState(false)
    const showSidebar=()=>{
        setSidebar(!sidebar)
    }

    return (
        <>
        <IconContext.Provider value={{color: "#060B26"}}>
            <Navbarr>
                <MenuBars to="#">
                <FaIcons.FaBars onClick={showSidebar}/>
                </MenuBars>
                <LogoContainer>
                    EM-pieza
                    <Logo src={logo} alt="Logo Empieza RompeCabezas"/>
                </LogoContainer>
            </Navbarr> 
            <Nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <NavMenuItem onClick={showSidebar}>
                    <LiNavbarToggle>
                        <MenuBars to="#">
                            <AiIcons.AiOutlineClose />
                        </MenuBars>
                    </LiNavbarToggle>
                    {SidebarData.map((item,index)=>{
                        return (
                            <CName key={index}>
                                <LinkMenuIcon to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </LinkMenuIcon>
                            </CName>
                        )
                    })}
                </NavMenuItem>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
