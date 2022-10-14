import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const Container = styled.section`
    width: 864px;
    margin: 0 auto;
    padding: 2rem 2rem;
`

export const Markdown = styled(ReactMarkdown)`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};
  code {
        font-weight: 300;
        font-family: "Fira Code";    
  }
`;