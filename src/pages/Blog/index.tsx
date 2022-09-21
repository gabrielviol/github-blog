import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import { Container, InputContent } from "./styles";

export function Blog() {
    return (
        <div>
            <Header />
            <Container>
                <Profile />
                <InputContent>
                    <div>
                        <span>Publicações</span>
                        <p>6 Publicações</p>
                    </div>
                    <input type="text" />
                    <tbody>
                        <tr>
                            <td><h1>Projeto JavaScript</h1></td>
                            <td><span>Há 1 dia</span></td>
                            <td><p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p></td>
                        </tr>
                        <tr>
                            <td><h1>Projeto JavaScript</h1></td>
                            <td><span>Há 1 dia</span></td>
                            <td><p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p></td>
                        </tr>
                        <tr>
                            <td><h1>Projeto JavaScript</h1></td>
                            <td><span>Há 1 dia</span></td>
                            <td><p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p></td>
                        </tr>
                        <tr>
                            <td><h1>Projeto JavaScript</h1></td>
                            <td><span>Há 1 dia</span></td>
                            <td><p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p></td>
                        </tr>
                    </tbody>
                </InputContent>
            </Container>
        </div>
    )
}