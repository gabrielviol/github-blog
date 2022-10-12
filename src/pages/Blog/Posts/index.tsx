import { useEffect, useState } from "react";
import { api } from '../../../services/api';

import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const USERNAME = "gabrielviol";
const REPO = "github-blog";

type OriginalPost = {
    title: string;
    updated_at: string;
    body: string;
    number: number;
};

type Post = {
    title: string;
    updatedAt: string;
    body: string;
    id: number;
};

interface IssuesResponseProps {
    total: number;
    posts: Post[];
}

const searchSchema = zod.object({
    query: zod.string(),
});

type SearchSchemaType = zod.infer<typeof searchSchema>;

export function Posts(){
    const [response , setResponse] = useState<IssuesResponseProps>()

    const { handleSubmit, register } = useForm<SearchSchemaType>({
        resolver: zodResolver(searchSchema),
    });

    async function loadPosts(query?: string){
        try{
            const response = await api.get(
                `/search/issues?q${query ?? ""}repo:${USERNAME}/${REPO}`
            );
            const { total_count, items } = response.data;

            const issue = {
                total: total_count,
                posts: items.map(
                    ({ title, updated_at, body, number }: OriginalPost) => ({
                        title,
                        updatedAt: updated_at,
                        body,
                        id: number,
                    })
                ),
            };
            setResponse(issue);
            } catch {}
        }
        async function onSubmit(data: SearchSchemaType){
            await loadPosts(data.query);
        }

        useEffect(() =>{
            loadPosts();
        }, []); 

    // useEffect(() => {
    //     api.get('/users/gabrielviol/repos')
    //         .then(response => setRepos(response.data))
    // }, [])

    return(
        <>
            <InputContent>
                    <div>
                        <span>Publicações</span>
                        <p>{response?.total ?? 0} Publicações</p>
                    </div>
                    <input type="text" placeholder="Buscar conteúdo" />
                </InputContent>
                {/* <TableContainer>
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
                </TableContainer> */}
        </>
    )
}