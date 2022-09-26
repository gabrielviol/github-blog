import { Content, Id, ContentProfile } from "./styles";

import { profileProps } from "..";




export function Profile({ name, bio, followers, avatar, company, nick }: profileProps) {
    

    return (
        <Content>
            <div>
                <img src={avatar} alt="ImageProfile" />
                <ContentProfile>
                    <Id>
                        <span>{name}</span>
                        <a href="https://github.com/gabrielviol">GITHUB</a>
                    </Id>
                    <p>{bio}</p>
                    <div>
                        <p>{nick}</p>
                        <p>{company}</p>
                        <p>{followers} Seguidores</p>
                    </div>
                </ContentProfile>
            </div>
        </Content>
    )
}

