

import { Content, Id, ContentProfile } from "./styles";

import { profileProps } from "..";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function Profile({ name, bio, followers, avatar, company, nick }: profileProps) {



    return (
        <Content>
            <div>
                <img src={avatar} alt="ImageProfile" />
                <ContentProfile>
                    <Id>
                        <span>{name}</span>
                        <div>
                            <a href="https://github.com/gabrielviol">
                                GITHUB
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                        </div>
                    </Id>
                    <p>{bio}</p>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>
                            {nick}
                        </p>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p>
                            {company}
                        </p>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p>
                            {followers} Seguidores
                        </p>
                    </div>
                </ContentProfile>
            </div>
        </Content>
    )
}

