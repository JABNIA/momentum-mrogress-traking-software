import styled from "styled-components";

export const TaskPageWrapper = styled.main`
    width: 1920px;
    height: 1450px;
    padding: 0 120px 0 121px;
    display: flex;
    gap: 223px;
`

export const TaskInformation = styled.section`
    width: 715px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 63px;
`

export const CommentsComponent = styled.section`
    width: 741px;
    min-height: 200px;
    max-height: 975px;
    margin-top:  99px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--fourth-color);
    border: 0.3px solid var(--teriary-color);
    border-radius:  10px;
`

export const General = styled.div`
    width: 100%;
    display: flex;  
    flex-direction: column;

    & > div {
        margin-bottom: 12px;
        display: flex;
        gap: 18px;
    }
`

export const Heading = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 34px;
    line-height: 100%;
    letter-spacing: 0%;
`

export const Description = styled.p`
    margin-top: 26px;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
`

export const Details = styled.div`
    width: 493px;

    .status-name{
        display: none;
    }

    .details{
        height: 70px;
        display: flex;
        gap: 70px;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
    }
    
    .details > div {
        min-width: 164px;
        display: flex;
        align-items: center;
        gap: 6px;
    }

    .avatar{
        width: 32px;
        height: 32px;
    }

    .empl{
        display: block;
    }

    .employee > div{
        display: flex;
    }
    
    .dep{
        font-weight: 300;
        font-size: 11px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: right;
        color: var(--text-color4);
    }

    .name {
        color: var(--text-color2);
    }

    .icon{
        width: 24px;
        height: 24px;
    }
`

export const DetailsHeading = styled.p`
    margin-bottom: 18px;
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: 0%;

    .details > div {
        display: flex;
        gap: 6px;
    }

`


export const TaskPriority = styled.div<{color: string}>`
    width: 106px;
    height: 32px;
    padding: 4px 5px;
    color: ${props => props.color};
    border: 0.5px solid ${props => props.color};
    border-radius: 3px; 

    & > img{
        margin: 6px 0;
    }
`

export const TaskDepartment = styled.div<{bgColor: string}>`
    width: 88px;
    height: 29px;
    border-radius: 15px;
    color: #FFFFFF;
    background-color: ${props => props.bgColor};
    text-align: center;
`

export const CommentInputWrapper = styled.div`
    width: 651px;
    height: 135px;
    margin: 40px 45px;
    background-color: var(--text-color1);
    border: 0.3px solid var(--border1);
    border-radius: 10px;
`

export const CommentInput = styled.textarea`
    width: 100%;
    height: 85px;
    resize: none;
    padding: 18px 20px 15px 20px;
    border: none;
    border-radius: 10px;
    outline: none;
`

export const CommentSubmitButton = styled.button`
    width: 155px;
    height: 35px;
    border-radius: 20px;
    margin-left: 456px;
    padding: 8px 20px 8px 20px;
    background-color: var(--primary-color);
    color: var(--text-color1);
    border: none;

    &:hover {
        background-color: var(--secondary-color);
        cursor: pointer;
    }
`