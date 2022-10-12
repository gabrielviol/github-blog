import { InputContent, TableContainer, TableContent } from "./styles"

import { format, formatDistanceToNow } from "date-fns";
import { pt, ptBR } from "date-fns/locale";

export function Posts(repos: any){
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
                            <a href="/post">
                                <TableContent key={repository.id}>
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