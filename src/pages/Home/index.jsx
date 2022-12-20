import { useContext } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Headline, Title1 } from "../../components/Text";
import { AuthContext } from "../../contexts/AuthContext";
import { Button } from "../../styles/Button";
import { ButtonPlus, Container, LoadSpinner, Main, StyledWrapper } from "./style";
import { GoPlus } from "react-icons/go"
import { TechContext } from "../../contexts/TechContext";
import DotLoader from "react-spinners/DotLoader";
import Switch from "react-switch";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Home = () => {
    const { logout, stack, user, loading } = useContext(AuthContext);
    const { openModal } = useContext(TechContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <Header>
                <Switch
                    onChange={toggleTheme}
                    checked={theme.title === "light"}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                    offColor={theme.colors.primaryDisabled}
                    onColor={theme.colors.primary}
                />
                <Button color="small" onClick={logout}>Sair</Button>
            </Header>
            <Container>
                <StyledWrapper>
                    <Title1 size={18} weight={"bold"}>Olá, {user.name}</Title1>
                    <Headline size={12} color={"grey1"} weight={"regular"}>{user.course_module}</Headline>
                </StyledWrapper>
            </Container>
            <Main>
                <div>
                    <Headline size={16} color={"grey0"} weight={"bold"}>Tecnologias</Headline>
                    <ButtonPlus onClick={openModal}>
                        <GoPlus />
                    </ButtonPlus>
                </div>

                {!loading && stack.length > 0
                    ?
                    <ul>
                        {stack.map((tech, index) => <Card key={index} title={tech.title} status={tech.status} id={tech.id} />)}
                    </ul>
                    :
                    <LoadSpinner>
                        {stack.length <= 0 &&
                            <Headline size={18} weight={"bold"}>Vamos cadastrar uma tecnologia?</Headline>
                        }
                        <DotLoader color="#FF577F" size={220} />
                    </LoadSpinner>
                }

            </Main>
        </>
    );
}