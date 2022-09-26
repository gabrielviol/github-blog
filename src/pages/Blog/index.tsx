import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import axios from 'axios'

import { Container, InputContent, TableContainer, TableContent } from "./styles";

export interface profileProps {
    id: string,
    name: string,
    bio: string,
    followers: number,
    avatar: string,
    company: string,
    nick: string
}

export function Blog() {
    const [data, setData] = useState<profileProps[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/users/gabrielviol')
            .then(response => setData(response.data))
    },[])
    

    return (
        <div>
            <Header />
            <Container>
                <Profile id={data.id}  name={data.name} bio={data.bio} avatar={data.avatar_url} followers={data.followers} company={data.company} nick={data.login}/>
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