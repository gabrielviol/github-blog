import { Container } from "./styles";

import cover from '../../../assets/cover.png'

export function Header() {
    return (
        <Container>
            <img src={cover} alt="ImageHeader" />
        </Container>
    )
}
