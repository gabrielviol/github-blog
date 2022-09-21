import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import { Container, InputContent, Content } from "./styles";

export function Blog() {
    return (
        <div>
            <Header />
            <Container>
                <Content>   
                    <Profile />                 
                    <InputContent>
                        <div>
                            <span>Publicações</span>
                            <p>6 Publicações</p>
                        </div>
                        <input type="text" />
                    </InputContent>
                </Content>
            </Container>
        </div>
    )
}