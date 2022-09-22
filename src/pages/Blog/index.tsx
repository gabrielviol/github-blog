import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import { Container, InputContent, TableContainer, TableContent } from "./styles";

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
                    <input type="text" placeholder="Buscar conteúdo"/>
                    <TableContainer>
                        <TableContent>
                            <div>
                                <h1>Projeto JavaScript asdasd asdasd</h1>
                                <span>Há 1 dia</span>
                            </div>
                            <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                        </TableContent>
                        <TableContent>
                            <div>
                                <h1>Projeto JavaScript asdasd asdasd</h1>
                                <span>Há 1 dia</span>
                            </div>
                            <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                        </TableContent>
                        <TableContent>
                            <div>
                                <h1>Projeto JavaScript asdasd asdasd</h1>
                                <span>Há 1 dia</span>
                            </div>
                            <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                        </TableContent>
                        <TableContent>
                            <div>
                                <h1>Projeto JavaScript asdasd asdasd</h1>
                                <span>Há 1 dia</span>
                            </div>
                            <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                        </TableContent>

                    </TableContainer>
                </InputContent>
            </Container>
        </div>
    )
}