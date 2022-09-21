import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    max-width: 1440px;
    border: 1px solid red;
    background: ${props => props.theme['base-background']};
`

export const Content = styled.div`
`

export const InputContent = styled.div`
    
    div{
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;
        margin-top: 7rem;
    }
    span{
        color: ${props => props.theme['base-subtitle']};
    }
    input{
        margin-top: 15px;
        background: ${props => props.theme['base-input']};
        width: 852px;
        height: 50px;
        border: 1px solid ${props => props.theme['base-border']};;
        border-radius: 6px;
    }
`