import axios from 'axios'

import { useEffect, useState } from "react";
import { format, formatDistanceToNow } from "date-fns";
import { pt, ptBR } from "date-fns/locale";

import { InputContent, TableContainer, TableContent } from "./styles"

interface reposProps {
    id: string,
    name: string,
    description: string,
    pushed_at: string,
    html_url: string
}

export function Posts(){

    const [repos, setRepos] = useState<reposProps[]>([])

    useEffect(() => {
        axios.get('https://api.github.com/users/gabrielviol/repos')
            .then(response => setRepos(response.data))
    }, [])

    return(
        <>
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
                            <a href="/post" key={repository.id}>
                                <TableContent >
                                    <div >
                                        <a href="/post">{repository.name}</a>
                                        <span>{formatDistanceToNow(new Date(repository.pushed_at), { addSuffix: true, locale: ptBR })}</span>
                                    </div>
                                    <p>{repository.description}</p>

                                </TableContent>
                            </a>

                        )
                    })}
                </TableContainer>
        </>
    )
}