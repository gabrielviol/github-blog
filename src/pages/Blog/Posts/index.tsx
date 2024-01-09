import { useEffect, useState } from "react";
import { api } from '../../../services/api';
import { Skeleton, Stack } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { InputContent, PostContent, TableContainer } from "./styles"

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

export function Posts() {
   const [response, setResponse] = useState<IssuesResponseProps>()

   const { handleSubmit, register, watch } = useForm<SearchSchemaType>({
      resolver: zodResolver(searchSchema),
   });

   async function loadPosts(query?: string) {
      try {
         const response = await api.get(
            `/search/issues?q=${query ?? ""}repo:${USERNAME}/${REPO}`
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
      } catch { }
   }
   async function onSubmit(data: SearchSchemaType) {
      await loadPosts(data.query);
   }

   useEffect(() => {
      loadPosts();
   }, []);

   return (
      <>
         <InputContent>
            <div>
               <span>Publicações</span>
               <p>{response?.total ?? 0} Publicações</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input
                  type="text"
                  placeholder="Buscar conteúdo"
                  disabled={!response?.posts}
                  {...register('query')}
               />
            </form>
         </InputContent>
         <TableContainer>
            {response ? response.posts.map(post => {
               return (
                  <PostContent to={`/post/${post.id}`} key={post.id}>
                     <div >
                        <h1>{post.title}</h1>
                        <span>{formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true, locale: ptBR })}</span>
                     </div>
                     <p>{post.body}</p>
                  </PostContent>
               )
            }) :
               <>
                  <Stack>
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                  </Stack>
                  <Stack>
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                  </Stack>
                  <Stack>
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                  </Stack>
                  <Stack>
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                     <Skeleton height='20px' />
                  </Stack>
               </>
            }
         </TableContainer>

      </>
   )
}