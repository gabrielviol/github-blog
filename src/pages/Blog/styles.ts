import styled from "styled-components";

export const Container = styled.div`
    width: 1440px;
    margin: 0 auto;
    background: ${props => props.theme['base-background']};
`

export const InputContent = styled.div`
    width: 864px;
    margin: 0 auto;
    margin-top: 5rem;
    div{
        display: flex;
        justify-content: space-between;
    }
    span{
        font-size: 18px;
        color: ${props => props.theme['base-subtitle']};
        line-height: 160%;
        font-weight: 700;
    }
    p{
        color: ${props => props.theme['base-span']};
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
    }
    input{
        margin-top: 15px;
        background: ${props => props.theme['base-input']};
        width: 100%;
        height: 50px;
        border: 1px solid ${props => props.theme['base-border']};;
        border-radius: 6px;
    }
`