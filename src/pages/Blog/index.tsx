import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import { Posts } from "./Posts";

import axios from 'axios'

import { Container } from "./styles";


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
                <Posts daata={repos} />

            </Container>
        </div>
    )
}