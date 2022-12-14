import styled from "styled-components";

export const Content = styled.div`
    width: 864px;
    height: 212px;
    margin: 0 auto;
    position: relative;
    padding: 2rem 2.5rem;
    background: ${props => props.theme['base-profile']};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    
    margin-top: -5.5rem;
    div{
        display: flex;
    }
    div:nth-child(3){
        margin-top: 1rem;
        gap: 2rem;
    }
    img{
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }
`
export const ContentProfile = styled.div`
    display: flex;    
    flex-direction: column;
    margin-left: 2rem;
    gap: 0.5rem;

    p{
        color: ${props => props.theme['base-text']};
        font-size: 16px;
        line-height: 160%;
    }
    
    span{
        font-family: 'Nunito', sans-serif;
        font-weight: 700;
        font-size: 26px;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
    }
    svg{
        font-size: 20px;
        margin-right: -20px;
        color: ${props => props.theme['base-label']};
    }
`

export const Id = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;   

    div{
        width: 70px;
        display: flex;
        align-items: center;
        gap: 5px;
        transition: .3s;
        border-bottom: 1px solid transparent;
        
       a{
        display: flex;
        gap: 10px;
        align-items: center;

        color: ${props => props.theme['blue']};

        font-size: 12px;
        line-height: 160%;
        font-weight: 700;
        text-decoration: none;
       } 
       svg{
        font-size: 14px;
        color: ${props => props.theme['blue']};
       }
    }
    div:hover{
        border-bottom: 1px solid ${props => props.theme['blue']};
    }
`