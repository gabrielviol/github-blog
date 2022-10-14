import { Container } from "./styles";

interface ContentProps {
    body: string;
  }

export function Content({ body }: ContentProps){
    return(
        <Container>
            {body}
        </Container>
    )
}