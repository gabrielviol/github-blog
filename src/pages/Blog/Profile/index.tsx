import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Content, Id, ContentProfile } from "./styles";
import { useFetch } from '../../../hooks/useFetch';

type User = {
    login: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    name: string;
    bio: string;
    company: string;
};

export function Profile() {
    const { data: user, error } = useFetch<User>("/users/gabrielviol");

    if (!user || error) return null;

    return (
        <Content>
            <div>
                <img src={user.avatar_url} alt="ImageProfile" />
                <ContentProfile>
                    <Id>
                        <span>{user.name}</span>
                        <div>
                            <a href="https://github.com/gabrielviol">
                                GITHUB
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                        </div>
                    </Id>
                    <p>{user.bio}</p>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <p>
                            {user.login}
                        </p>
                        <FontAwesomeIcon icon={faBuilding} />
                        <p>
                            {user.company}
                        </p>
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p>
                            {user.followers} Seguidores
                        </p>
                    </div>
                </ContentProfile>
            </div>
        </Content>
    )
}

