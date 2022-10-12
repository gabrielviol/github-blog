import { Header } from "../../components/Header";
import { Profile } from "./Profile";
import { Posts } from "./Posts";
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

export function Blog() {
    return (
        <div>
            <Header />
            <Container>
                <Profile />
                <Posts />
            </Container>
        </div>
    )
}