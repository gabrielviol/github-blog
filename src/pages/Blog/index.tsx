import { Header } from "../../components/Header";
import { Container } from "./styles";
export function Blog() {
    return (
        <>
        <Header/>
        <Container>
            <div>
                <img src="" alt="ImageProfile" />
                <div>
                    <span>Gabriel Oliveira</span>
                    <a href="/">GITHUB</a>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quae repellendus blanditiis provident optio dolorum exercitationem temporibus labore cumque commodi, quibusdam</p>
                <div>
                    <span>Github</span>
                    <span>Empresa</span>
                    <span>10 Seguidores</span>
                </div>
            </div>
        </Container>
        </>
    )
}