import { Container } from "./styles";

interface ContentProps {
    body: string;
  }

export function Content({ body }: ContentProps){
    return(
        <Container>
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit. 
            Excepturi commodi, laudantium 
            distinctio consequatur ex, nulla 
            dolorum veniam alias assumenda aperiam 
            rerum recusandae neque quos maxime itaque autem, vitae illum est!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat 
            exercitationem sapiente dignissimos voluptate optio eum qui rerum? 
            Similique quas nesciunt maxime. Consequatur, eum? Nisi quis assumenda 
            vel tenetur. Vel.
        </Container>
    )
}