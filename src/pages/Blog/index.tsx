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

interface reposProps {
    id: string,
    name: string,
    description: string,
    pushed_at: string,
    html_url: string
}

export function Blog() {
    const [data, setData] = useState<profileProps[]>([])
    const [repos, setRepos] = useState<reposProps[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/users/gabrielviol')
            .then(response => setData(response.data))
    }, [])

    useEffect(() => {
        axios.get('https://api.github.com/users/gabrielviol/repos')
            .then(response => setRepos(response.data))
    }, [])


    return (
        <div>
            <Header />
            <Container>
                <Profile id={data.id} name={data.name} bio={data.bio} avatar={data.avatar_url} followers={data.followers} company={data.company} nick={data.login} />
                <InputContent>
                    <div>
                        <span>Publicações</span>
                        <p>6 Publicações</p>
                    </div>
                    <input type="text" placeholder="Buscar conteúdo" />
                </InputContent>
                <TableContainer>
                    <TableContent>
                        <div>
                            <h1>Projeto JavaScript asdasd asdasd</h1>
                            <span>Há 1 dia</span>
                        </div>
                        <p>description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto description do projeto </p>
                    </TableContent>
                    {repos.map(repository => {
                        return (
                            <TableContent>
                                <div key={repository.id}>
                                    <h1>{repository.name}</h1>
                                    <span>{repository.pushed_at}</span>
                                </div>
                                <p>{repository.description}</p>
                            </TableContent>
                        )
                    })}
                </TableContainer>

            </Container>
        </div>
    )
}