import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Skeleton, Stack, SkeletonCircle } from "@chakra-ui/react";
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
  const { data: user, error, loading } = useFetch<User>("/users/gabrielviol");

  if (error) return <h1>Error!</h1>;

  return (
    <Content>
      {!user ?
        <Stack>
          <SkeletonCircle size='10' />
          <Skeleton height='20px' />
          <Skeleton height='10px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack> :
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
      }
    </Content>
  )
}

