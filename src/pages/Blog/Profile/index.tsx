import { Content, Id, ContentProfile } from "./styles";

import { profileProps } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'




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
                        <p>
                        <FontAwesomeIcon icon={brands('github')} />
                            {company}
                        </p>
                        <p>{followers} Seguidores</p>
                    </div>
                </ContentProfile>
            </div>
        </Content>
    )
}

