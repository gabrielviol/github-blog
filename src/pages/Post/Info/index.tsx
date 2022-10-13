import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

import { Container, Linkk } from "./styles";
import { CalendarIcon } from '../../../assets/Calender';
import { ArrowIcon } from '../../../assets/Arrow';
import { ChatIcon } from '../../../assets/Chat';
import { difference } from '../../../utils/date';

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

export function Info({ info }: InfoProps) {
    // const time = formatDistanceToNow(new Date(info.updatedAt), { addSuffix: true, locale: ptBR })
    const timePhrase = difference(new Date(info.updatedAt));
    return (
        <Container>
            <header>
                <Linkk to="/">
                    <ArrowIcon />
                    <span>voltar</span>
                </Linkk>
                <a href={info.url} className="github">
                    <span>Ver no github</span>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </header>

            <h1>{info.title}</h1>

            <ul>
                <li>
                    <FontAwesomeIcon icon={faGithub} />
                    <span>{info.user?.login}</span>
                </li>

                <li>
                    <CalendarIcon />
                    <span>{timePhrase}</span>
                </li>

                <li>
                    <ChatIcon />
                    <span>{info.comments} comentários</span>
                </li>
            </ul>
        </Container>
    )
}