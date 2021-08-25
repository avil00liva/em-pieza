import styled from "styled-components"
import {Link as LinkNb} from "react-router-dom"
import {Link as LinkMI} from "react-router-dom"

const orange= "#F9A826"
const dOrange= "#F29900"
const lBlack= "#060B26"

export const Navbarr=styled.div`
    position: absolute;
    background-color: ${orange};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`
export const LogoContainer=styled.span`
    margin-right: 2rem;
    display: flex;
    align-items: center;
`
export const Logo=styled.img`
    width: 70px;
    height: 69.891px;
`
export const MenuBars=styled(LinkNb)`
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    text-decoration: none;
    color: ${lBlack};
`
export const LinkMenuIcon=styled(LinkMI)`
    text-decoration: none;
    color: ${lBlack};
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;

    &:hover{
        background-color: #EFBA52;
        color: #060b26;
    }
`
export const Nav=styled.nav`
 /*   background-color: #060b26;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;*/
    z-index: 200;
`
export const NavMenuItem=styled.ul`
    width: 100%;
`
export const LiNavbarToggle=styled.li`
    background-color: ${dOrange};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
`
export const CName=styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
`