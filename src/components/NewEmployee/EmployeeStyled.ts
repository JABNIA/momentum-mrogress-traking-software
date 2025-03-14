import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(13, 15, 16, 0.15);
    backdrop-filter: blur(2px);
`

export const Modal = styled.div`
    position: absolute;
    top: 118px;
    left: 580px;
    width: 913px;
    height: 766px;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 117px 50px;
    box-sizing: border-box;
    
    input {
        width: 382px;
        height: 42px;
        border: 1px solid #CED4DA;
        border-radius: 6px;
    }

    .input-wrapper{
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .for-avatar{
        grid-column: 1/3;
    }

    .avatar{
        width: 100%;
        height: 100%;
        border: 2px dashed #CED4DA;
    }

    .heading{
        width: 813px;
        height: 38px;
        margin-bottom: 45px;
        font-family: 'FiraGO';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-align: center;
        color: #212529;
    }
    .close-btn{
        position: absolute;
        top: 40px;
        right: 50px;
        width: 40px;
        height: 40px;
    }

    .buttons-container{
        display: flex;
        justify-content: flex-end;
        column-gap: 22px;
    }
    
`

export const Inputs = styled.div`
    display: grid;
    grid-template-columns: 382px 382px;
    grid-template-rows: 102px 145px 102px;
    grid-row-gap: 45px;
    grid-column-gap: 45px;

    .name-surname{
        grid-columns: 1/3;
        display: flex;
        justify-content: space-between;
        gap: 45px;
    }
`