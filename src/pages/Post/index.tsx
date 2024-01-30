import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { Content } from "./Content";
import { Info } from "./Info";
import { Container } from "./styles";

const USERNAME = "gabrielviol";
const REPO = "github-blog";

type User = {
   login: string;
}

type OriginalPost = {
   title: string;
   updated_at: string;
   body: string;
   number: number;
   user: User;
   html_url: string;
   comments: number;
}

interface PostProps {
   user: User;
   title: string;
   updatedAt: string;
   body: string;
   id: number;
   url: string;
   comments: number;
}

export function Post() {
   const { id } = useParams() as { id: string };
   const numberId = Number(id);

   const { data, loading } = useFetch<OriginalPost>(
      `/repos/${USERNAME}/${REPO}/issues/${numberId}`
   );
   const post = useMemo(() => {
      if (!data) return {};

      const { user, body, number, updated_at, title, html_url, comments } = data;

      return {
         user: {
            login: user.login,
         },
         body,
         id: number,
         updatedAt: updated_at,
         title,
         url: html_url,
         comments,
      };
   }, [data]) as PostProps;

   return (
      <div>
         <Container>
            <Info info={post} loading={loading} />
            <Content body={post.body} loading={loading} />
         </Container>
      </div>
   )
}