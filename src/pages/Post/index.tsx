import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
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
    url: string;
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

        const { user, body, number, updated_at, title, url, comments } = data;

        return {
            user: {
                login: user.login,
            },
            body,
            id: number,
            updatedAt: updated_at,
            title,
            url,
            comments,
        };
    }, [data]) as PostProps;

    // if (loading) return <Loading />;

    return (
        <div>
        <Container>
            <Info info={post}/>
            {/* <SectionContent body={post.body} /> */}
        </Container>
        </div>
    )
}