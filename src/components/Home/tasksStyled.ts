import styled from "styled-components";

export const HomeWrapper = styled.main`
    padding: 0 120px;
`
export const TaskManagementWrapper = styled.section`

    display: flex;
    justify-content: space-between;
`

export const TaskStatuses =styled.section`
    width: 382px;
    height: 1042px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .emploee-avatar{
        width: 31px;
        height: 31px;
    }
`

export const StatusTitle = styled.p<{id:number}>`
    width: 381px;
    height: 54px;
    font-size: 20px;
    color: #FFFFFF;
    background: ${(props) => props.id === 1 ? "#F7BC30" :  props.id === 2 ? "#FB5607" : props.id === 3 ? "#FF006E" : "#3A86FF"};
    border-radius: 10px;
    text-align: center;
    padding: 15px 0;
    box-sizing: border-box;
`

export const TaskWrapper = styled.div<{borderColor: string}>`
    width: 381px;
    height: 217px;
    gap: 28px;
    border-radius: 15px;
    border-width: 1px;
    padding: 20px;
    margin-top: 30px;
    border: 1px solid ${props => props.borderColor};
    border-radius: 15px;

    .task-info{
        display: flex;
        gap: 10px;
    }
`

export const PriorityWrapper = styled.p<{color: string}>`
    width: 86px;
    height: 26px;
    border: 0.5px solid ${props => props.color};
    border-radius: 4px;
    padding: 4px;
    color: ${props => props.color};
    font-family: FiraGO;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    letter-spacing: 0%;
    display: flex;
    align-items: center;
    gap: 4px;
`   

export const TaskDepartmentWrapper = styled.p<{bgcolor:string}>`
    width: 88px;
    height: 24px;
    gap: 10px;
    border-radius: 15px;
    padding-top: 5px;
    padding-right: 9px;
    padding-bottom: 5px;
    padding-left: 9px;
    background-color: ${props => props.bgcolor};
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
    text-align: center;
`

export const TaskDeadline = styled.p`
    width: 76px;
    margin: 6px 0 0 71px;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;

`

export const TaskTitle = styled.p`
    margin: 28px 0 12px 0;
    font-weight: 500;
    font-size: 15px;
    line-height: 100%;
    letter-spacing: 0%;
`

export const TaskDescription = styled.p`
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
`
export const TaskComments = styled.div`
    width: 341px;
    height: 31px;
    margin-top: 28px;
    display: flex;
    justify-content: space-between;
`

export const FormWrapper = styled.div`
    position: relative;
    width: 688px;
    height: 44px;
    margin: 52px 0 25px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #DEE2E6;
    border-radius: 10px;

`

export const SelectContainer = styled.div`
    position: absolute;
    top: 55px;
    left: 0px;
    width: 688px;
    height: 298px;
    padding: 40px 30px 20px;
    background-color: #FFFFFF;
    border: 1px solid #8338EC;
    border-radius: 10px;
    box-sizing: border-box;

    button {
        position: absolute;
        right: 30px;
        bottom: 20px;
        width: 155px;
        height: 35px;
        padding: 8px 20px;
        color: var(--text-color1);
        font-family: FiraGO;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0%;
        border: none;
        border-radius: 20px;
        background-color: var(--primary-color);
    }
`

export const OprionsWrapper = styled.ul`
    width: auto;
    height: 178px;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    row-gap: 22px;
    overflow-x: hidden;
    overflow-y: auto;
    list-style: none;

 
`
    
export const LiOptions = styled.li<{color: string, check: boolean}>`
    position: relative;
    height: 22px;

    input {
        display: none;
    }
    label{
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: 0%;
    }
    label::before{
        content: "";
        width: 22px;
        height: 22px;
        display: inline-block;
        border: 1.5px solid ${props => props.color};
        border-radius: 6px;
    }

    svg{
        position: absolute;
        visibility: ${props => props.check ? "visible" : "hidden"};
        top: 7.33px;
        left: 5.6px;
        stroke: ${props => props.color};
    }
`

export const FilterList = styled.ul`
    margin-bottom: 24px;
    display: flex;
    gap: 8px;
    list-style: none;

    li{
        padding: 6px 10px;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;
        color: #343A40;      
        border: 1px solid #CED4DA;
        border-radius: 43px;
        display: flex;
        align-items: center;
    }
`