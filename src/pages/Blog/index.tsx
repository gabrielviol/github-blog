import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import { Posts } from "./Posts";
import { Container } from "./styles";

import { api } from "../../services/api";


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
        api.get('/users/gabrielviol')
            .then(response => setData(response.data))
    }, [])

    return (
        <div>
            <Header />
            <Container>
                <Profile id={data.id} name={data.name} bio={data.bio} avatar={data.avatar_url} followers={data.followers} company={data.company} nick={data.login} />
                <Posts />

            </Container>
        </div>
    )
}