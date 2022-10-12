import styled from "styled-components";

export const InputContent = styled.div`
width: 864px;
margin: 0 auto;
margin-top: 4rem;


div{
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
input::placeholder{
    color: ${props => props.theme['base-label']};
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    padding: 10px;
}
`

export const TableContainer = styled.table`
    width: 864px;
    margin: 0 auto;
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    a{
        text-decoration: none;
    }
        
`


export const TableContent = styled.div`
        width: 416px;
        height: 260px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        border-radius: 10px;
        background: ${props => props.theme['base-post']};
        
        

        &:hover{
        border: 2px solid ${props => props.theme['base-label']};
        overflow: hidden;
    }
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        word-break: break-word;
        
        a{
            font-weight: 700;
            font-size: 20px;
            line-height: 160%;
            color: ${props => props.theme['base-title']};
            text-decoration: none;
        }
        span{
            font-weight: 400;
            margin-top: 2px;
            font-size: 14px;
            line-height: 160%;
            color: ${props => props.theme['base-span']};
            white-space: nowrap;
        }        
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;
        color: ${props => props.theme['base-text']};
    }
`