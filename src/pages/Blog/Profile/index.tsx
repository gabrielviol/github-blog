import { Content, Id, ContentProfile } from "./styles";

import avatar from '../../../assets/avatar.svg'

export function Profile() {
    return (
        <Content>
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
        </Content>
    )
}

