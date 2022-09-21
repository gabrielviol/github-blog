import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54rem;
    height: 13.25rem;
    position: absolute;
    background: ${props => props.theme['base-profile']};
    border-radius: 10px;
    margin-top: -9.5rem;
    padding: 1rem 2.5rem;
    div{
        display: flex;
    }
`
export const ContentProfile = styled.div`
    display: flex;    
    flex-direction: column;
    padding: 2rem;
    gap: 0.5rem;
    p{
        color: ${props => props.theme['base-text']};
        font-size: 16px;
        line-height: 160%;
    }
    div{
        margin-top: 1rem;
        gap: 2rem;
    }
    span{
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
    }
`

export const Id = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;    
`