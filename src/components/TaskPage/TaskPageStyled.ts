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
    background-color: var(--teriary-color);
`

export const General = styled.div`
    width: 100%;
    display: flex;  
    flex-direction: column;
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
    font-weight: 400;
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
        font-weight: 400;
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