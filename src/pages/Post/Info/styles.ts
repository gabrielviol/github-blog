import styled from "styled-components";

export const Container = styled.div`
    width: 864px;
    height: 212px;
    margin: 0 auto;
    position: relative;
    padding: 2rem 2.5rem;
    background: ${props => props.theme['base-profile']};
    border-radius: 10px;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    
    margin-top: -5.5rem;
`;