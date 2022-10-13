import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 864px;
    height: 168px;
    margin: 0 auto;
    position: relative;
    padding: 2rem 2.5rem;
    background: ${props => props.theme['base-profile']};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    
    margin-top: -5.5rem;
    
    header{
        display: flex;
        justify-content: space-between;

        a {
            display: flex;
            align-items: center;
            color: ${props => props.theme['blue']};
            text-transform: uppercase;
            text-decoration: none;
            gap: 8px;
            font-size: 12px;
            font-weight: 700;
            line-height: 160%;
            border-bottom: 1px solid transparent;
        }
        .github{
            transition: .3s;
        }
        .github:hover{
        border-bottom: 1px solid ${props => props.theme['blue']};
        
    }
        svg {
            width: 14px;
            height: 14px;
        }
    }

    h1{
        font-size: 24px;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
        margin-top: 1.5rem;
    }

    ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    margin-top: 0.5rem;
        
        li {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        svg{
            width: 18px;
            height: 18px;
            color: ${props => props.theme['base-label']};
        }
        span {
            font-size: 16px;
            line-height: 160%;
            font-weight: 400;
            color: ${props => props.theme['base-span']};
        }
    }
`;



export const Linkk = styled(Link)`
    transition: .3s;
    
        :hover{
            border-bottom: 1px solid ${props => props.theme['blue']};
        }
`