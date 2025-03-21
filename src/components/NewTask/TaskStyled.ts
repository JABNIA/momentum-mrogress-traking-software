import styled from "styled-components";
import { ButtonLink } from "../Header/HeaderStyled";

export const Select = styled.div<{ open: boolean }>`
  width: 259px;
  height: auto;
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 0 0 14px;

  .selection {
    position: relative;
    width: auto;
    height: 46px;
    display: flex;
    align-items: center;
    column-gap: 6px;
    font-size: 14px;
    font-weight: lighter;
  }

  .wide {
    width: 550px;
  }

  .icon {
    display: inline-block;
    margin: 14px 6px 14px 14px;
  }

  .dropdown-arrow{
    position: absolute;
    top: 20.65px;
    right: 21px;
  }
  
  .employee{
    display: flex;
    gap: 6px;
  }

  .employee-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

export const Wrapper = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  p {
    width: 119px;
    height: 19px;
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: #343A40;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px -2px;

  }
  
  .variants-container {
    padding: 0;
    list-style: none;
  }

  ul {
    height: auto;
    margin: 0px;
  }
  li {
    display: flex;
    align-items: center;
    height: 46px;
    box-sizing: border-box;
  }

  .name {
    font-size: 14px;
    font-weight: lighter;
  }

  .add-employee{
    width: 550px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
    border: none;
    background-color: transparent;
    color: #8338EC;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
  }
  
  .add-employee span{
    display: block;
  }

  .circle{
    display: flex;
    align-items: center;
    width: 18px;
    height: 18px;
    border: 1.5px solid #8338EC;
    border-radius: 30px;
  }
`;


export const FormWrapper = styled.div`
  width: 1684px;
  height: 958px;
  margin: auto;
  padding: 65px 55px;
  background-color: #FBF9FF;
  
  form {
    width: 100%;
    height: auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    column-gap: 161px;
    row-gap: 55px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    margin: 0 0 32px 0;
  }

  .input-wrapper > input{
    width: 550px;
    height: 45px;
    border: 1px solid #DEE2E6;
    border-radius: 5px;
    padding: 14px;
    box-sizing: border-box;
  }
  
  .deadline{
    grid-column: 2/3;
    grid-row: 3/4;
  }

  .deadline > input{
    width: 320px;
  }

  .description {
    width: 550px;
    height: 133px;
    resize: none;
    border: 1px solid #DEE2E6;
    border-radius: 5px;
    grid-column: 1/2;
    grid-row: 1/2;
  }


  .priority-status {
    display: flex;
    gap: 32px;
    grid-column: 1/2;
    grid-row: 3/4;
  }

  .priority-status select {
    width: 259px;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px solid #DEE2E6;
    border-radius: 5px;
    box-sizing: border-box;
    }

    .validCheck{ 
      font-family: FiraGO;
      font-weight: 350;
      font-size: 10px;
      line-height: 100%;
      letter-spacing: 0%;
      color: #6C757D;
    }

    .valid {
      color: #08A508;
    }

    .invalid {
      color:#FA4D4D;
    }
`

export const Calendar = styled.div`
  width: 318px;
  height: 336px;
  background-color: #FFFFFF;
  margin-top: 4px;
  box-sizing: border-box;
  
  .months-selection {
    position: relative;
    margin: 16.5px 0 14.5px 18px;
    border: none;
    background-color: transparent;
    font-weight: 700;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
    appearance: none; 
    cursor: pointer;
  }

  .month-list{
    position: absolute;
    margin-top: 5px;
    width: 125px;
    height: auto;
    list-style: none;
    text-align: left;
    background-color: #FFFFFF;

  }
  
  .option{
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .option:hover{
    background-color: #B588F4;
  }

  .buttons{
    width: 286px;
    margin: 22px auto;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
  }
  .current-month{
    color: #0D0F10;
  }
  .current-month:hover{
    color: #FFFFFF;
    background-color: #8338EC;
  }
  .default-deadline{
    background-color: #8338EC;
    color: #FFFFFF;
    border-radius: 2px;
  }

  .other-month{
    color: #6C757D;   
  }

  .selected-month{
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .month-switcher-arrows{
    margin: 16px 78px 12px 0;
    width: 48px;
    height: 20px;
    display: flex;
    gap: 9.25px;
  }

  table{
    width: 224px;
    height: 224px;
    margin: 0 78px 0 16px;
    padding: 6px 9px;
  }

  th {
    width: 32px;
    height: 32px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }

  td{
    width: 32px;
    height: 32px;
    border-radius: 2px;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }


  button{
    background: transparent;
    border: none;
    color: #8338EC;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }
`
export const DateSelection = styled.div`
  position: relative;
  width: 318px;
  height: 45px;
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  
  .calendar-icon{
    position: absolute;
    top: 15.16px;
    left: 15.33px;
  }

  .deadline{
    width: 318px;
    height: 45px;
    padding-left: 36px;
    border: 1px solid rgba(222, 226, 230, 1);
    border-radius: 5px;
    background-color: #FFFFFF;
    color: #ADB5BD;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -1.25%;
    outline: none;
  }
`
export const NewTaskButtonLink = styled(ButtonLink)`
    position: absolute;
    bottom: 62px;
    left: 1053px;
    width: 208px;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
  `