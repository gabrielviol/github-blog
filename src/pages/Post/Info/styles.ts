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
        }
        svg {
            width: 15px;
            height: 15px;
        }
        &:hover{
            filter: brightness(0.7);
        }
    }

    h1{
        font-size: 24px;
        font-weight: 700;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
        margin-top: 1rem;
    }

    ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
        
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
    }
`;