import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    background: ${props => props.theme['base-background']};
`

export const InputContent = styled.div`
    width: 864px;
    margin: 0 auto;

    div{
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    span{
        color: ${props => props.theme['base-subtitle']};
        font-weight: 700;
        font-size: 18px;
        line-height: 160%;
    }
    p{
        color: ${props => props.theme['base-span']};
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
    }
    input{
        margin-top: 15px;
        background: ${props => props.theme['base-input']};
        width: 100%;
        height: 50px;
        border: 1px solid ${props => props.theme['base-border']};
        border-radius: 6px;
    }
`

export const TableContainer = styled.table`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    td{

        border-radius: 10px;
        background: ${props => props.theme['base-post']};
    }
`