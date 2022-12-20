import { Wrapper } from "../../styles/Wrapper";
import { Container } from "./style";
import logo from "../../assets/img/logo.svg";

export const Header = ({ children }) => {
    return (
        <Container>
            <Wrapper>
                <div>
                    <h1 hidden>Kenzie Hub</h1>
                    <img src={logo} alt="Kenzie Hub" />
                </div>
                {children}
            </Wrapper>
        </Container>);
}