import { Header } from "../../components/Header";
import { Container, Id, Profile, ContentProfile, InputContent } from "./styles";

import avatar from '../../assets/avatar.svg'

export function Blog() {
    return (
        <div>
            <Header />
            <Container>
                <Profile>
                    <div>
                        <img src={avatar} alt="ImageProfile" />
                        <ContentProfile>
                            <Id>
                                <span>Gabriel Oliveira</span>
                                <a href="/">GITHUB</a>
                            </Id>
                            <p>Lorem ipsum dolor sit amet, consectetur ionem temporibus labore cumque commodi, quibusdam</p>
                            <div>
                                <p>Github</p>
                                <p>Empresa</p>
                                <p>10 Seguidores</p>
                            </div>
                        </ContentProfile>
                    </div>
                </Profile>
                <InputContent>
                    <span>Publicações</span>
                    <p>6 Publicações</p>
                </InputContent>
            </Container>
        </div>
    )
}