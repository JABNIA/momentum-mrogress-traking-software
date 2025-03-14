import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const Navigation = styled.nav`
    width: 1920px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    
    .logo{
        display: flex;
        align-items: center;
        margin: 32px 0 32px 120px;
        font-family: FredokaOne;
        font-size: 31px;
        font-weight: regular;
        color: #8338EC;
    }

    .buttons{
        margin: 30px 80px;
        display: flex;
        column-gap: 40px;
    }
`


export const Button = styled.button<{bg:string, color:string, border: string}>`
    width: auto;
    height: 42px;
    padding: 10px 20px;
    border: ${(props) => props.border ? "1px solid #8338EC" : "none"};
    border-radius: 5px;
    background-color: ${(props) => props.bg};
    color: ${(props) => props.color};
    font-family: FiraGO;
    font-size: 16px;
`

export const ButtonLink = styled(Link)<{bg: string, color: string, border: string}>`
    ${(props) => css`
        width: auto;
        height: 42px;
        padding: 0 20px;
        border: ${props.border ? "1px solid #8338EC" : "none"};
        border-radius: 5px;
        background-color: ${props.bg};
        color: ${props.color};
        font-family: FiraGO;
        font-size: 16px;
        text-decoration: none;
        display: flex;
        align-items: center;
   `}
`