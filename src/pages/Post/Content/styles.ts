import styled from "styled-components";
import ReactMarkdown from "react-markdown";

export const Container = styled.div`
    width: 864px;
    height: 168px;
    margin: 0 auto;
    padding: 2rem 2rem;
`

export const Markdown = styled(ReactMarkdown)`
  margin-top: 20px;
  font-weight: 700;
  font-size: 1rem;
  line-height: 160%;
  color: ${({ theme }) => theme["gray-200"]};
  code {
    span {
      font-family: "Fira Code";
    }
  }
`;