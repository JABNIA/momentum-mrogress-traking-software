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

export const TaskDepartmentWrapper = styled.p<{bgColor:string}>`
    width: 88px;
    height: 24px;
    gap: 10px;
    border-radius: 15px;
    padding-top: 5px;
    padding-right: 9px;
    padding-bottom: 5px;
    padding-left: 9px;
    background-color: ${props => props.bgColor};
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
    text-align: center;
`

export const TaskDeadline = styled.p`
    width: 76px;
    margin: 6px 0 0 71px;
    font-weight: 400;
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
    font-weight: 400;
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