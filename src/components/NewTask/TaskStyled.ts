import styled from "styled-components";

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

  .icon {
    display: inline-block;
    margin: 14px 6px 14px 14px;
  }

  .dropdown-arrow{
    position: absolute;
    top: 20.65px;
    right: 21px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  p {
    /* სათაური */
    width: 119px;
    height: 19px;
    font-family: 'FiraGO';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* Grey SHades/Subheadlines */
    color: #343A40;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px -2px;

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
    display: grid;
    grid-template-columns: 550px 550px;
    grid-template-rows: 106px 194px 260px;
    grid-column-gap: 161px;
    grid-row-gap: 55px;
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

`

export const Calendar = styled.div`
  width: 318px;
  height: 336px;
  background-color: #FFFFFF;
  margin-top: 4px;
  box-sizing: border-box;

  .months {
    margin: 14px 0 0 14px ; 
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

  .other-month{
    color: #6C757D;   
  }

  table{
    width: 224px;
    height: 224px;
    margin: 0 47px;
  }

  th {
    width: 32px;
    height: 32px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }

  td{
    width: 32px;
    height: 32px;
    border-radius: 2px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }


  button{
    background: transparent;
    border: none;
    color: #8338EC;
    font-weight: 400;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
    text-align: center;
  }
`
export const DateSelection = styled.div`
  width: 318px;
  height: 45px;
  padding: 14px;
  display: flex;
  justify-content: flex-start;
  gap: 6px;
  border: 1px solid rgba(222, 226, 230, 1);
  border-radius: 5px;
  background-color: #FFFFFF;
  color: #ADB5BD;
`