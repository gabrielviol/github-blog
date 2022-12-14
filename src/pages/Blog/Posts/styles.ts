import styled from "styled-components";
import { Link } from 'react-router-dom'

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
    padding: 0 10px;
    color: ${props => props.theme['base-subtitle']};
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
}
`

export const TableContainer = styled.div`
    width: 864px;
    margin: 0 auto;
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;        
`
export const PostContent = styled(Link)`
        width: 416px;
        height: 260px;
        padding: 2rem;
        border: 2px solid transparent;

        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        border-radius: 10px;

        text-decoration: none;
        background: ${props => props.theme['base-post']};
        transition: .3s;
        
        &:hover{
        border: 2px solid ${props => props.theme['base-label']};        
        }
    
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        
        h1{
            font-weight: 700;
            font-size: 20px;
            line-height: 160%;
            color: ${props => props.theme['base-title']};
            text-decoration: none;

            overflow: hidden;
            display: -webkit-box;
            line-height: 140%;
            max-height: 80px;      
            -webkit-line-clamp: 2; 
            -webkit-box-orient: vertical;
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
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
`