import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import axios from 'axios'

import { Container, InputContent, TableContainer, TableContent } from "./styles";

export interface reposProps {
    id: string,
    name: string,
    description: string,
    pushed_at: string,
    html_url: string,
    fork: number,
    license: object,
    archived: boolean
}

export function Blog() {
    const [data, setData] = useState<reposProps[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/users/gabrielviol')
            .then(response => setData(response.data))
            console.log(data)
    },[])
    

    return (
        <div>
            <Header />
            <Container>
                <Profile name={data.name} bio={data.bio} avatar={data.avatar_url} followers={data.followers} company={data.company} nick={data.login}/>
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