import { faArrowAltCircleDown, faRegistered } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Container } from "./styles";

type Info = {
    user: {
        login: string;
    }
    updatedAt: string;
    title: string;
    url: string;
    comments: number;
}
interface InfoProps {
    info: Info;
}

export function Info({ info }: InfoProps){

    return(
        <Container>
            <header>
                <Link to="/">
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
                    <span>voltar</span>
                </Link>

                <a href={info.url}>
                    <span>Ver no github</span>
                    <FontAwesomeIcon icon={faRegistered} />
                </a>
            </header>

            <h1>{info.title}</h1>

            <ul>
                <li>
                <FontAwesomeIcon icon={faGithub} />
                <span>{info.user?.login}</span>
                </li>

                <li>
                <FontAwesomeIcon icon={faGithub} />
                </li>
            </ul>
        </Container>
    )
}