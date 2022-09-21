import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import { Container, InputContent, TableContainer } from "./styles";

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
                    <TableContainer>
                    <tbody>
                        <tr>
                            <td>
                                <h1>Projeto JavaScript</h1>
                                <span>Há 1 dia</span>
                                <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                            </td>
                            <td>
                                <h1>Projeto JavaScript</h1>
                                <span>Há 1 dia</span>
                                <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                            </td>
                            <td>
                                <h1>Projeto JavaScript</h1>
                                <span>Há 1 dia</span>
                                <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                            </td>
                            <td>
                                <h1>Projeto JavaScript</h1>
                                <span>Há 1 dia</span>
                                <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                            </td>
                            <td>
                                <h1>Projeto JavaScript</h1>
                                <span>Há 1 dia</span>
                                <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                            </td>
                            <td>
                                <h1>Projeto JavaScript</h1>
                                <span>Há 1 dia</span>
                                <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                            </td>
                            <td>
                                <h1>Projeto JavaScript</h1>
                                <span>Há 1 dia</span>
                                <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                            </td>
                        </tr>                        
                    </tbody>
                    </TableContainer>
                    </InputContent>
            </Container>
        </div>
    )
}