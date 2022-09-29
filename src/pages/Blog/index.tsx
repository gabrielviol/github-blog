import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "./Profile";

import axios from 'axios'

import { Container, InputContent, TableContainer, TableContent } from "./styles";
import { format, formatDistanceToNow } from "date-fns";
import { pt, ptBR } from "date-fns/locale";

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
                        <p>{repos.length} Publicações</p>
                    </div>
                    <input type="text" placeholder="Buscar conteúdo" />
                </InputContent>
                <TableContainer>
                    {repos.map(repository => {
                        return (
                            <a href={repository.html_url}>
                                <TableContent key={repository.id}>
                                    <div >
                                        <a href={repository.html_url}>{repository.name}</a>
                                        <span>{formatDistanceToNow(new Date(repository.pushed_at), { addSuffix: true, locale: ptBR })}</span>
                                    </div>
                                    <p>{repository.description}</p>

                                </TableContent>
                            </a>

                        )
                    })}
                </TableContainer>

            </Container>
        </div>
    )
}