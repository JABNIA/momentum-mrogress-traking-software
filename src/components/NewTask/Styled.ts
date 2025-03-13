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

  p {
    font-size: 16px;
    line-height: 0;
  }
`;
