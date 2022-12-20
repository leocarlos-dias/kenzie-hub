import { useContext } from "react"
import { TechContext } from "../../contexts/TechContext"
import { Headline, Text } from "../Text"
import { List } from "./style"

export const Card = ({ title, status, id }) => {
    const { openModal, setCurrentValueTech } = useContext(TechContext)

    function handleData(event) {
        const idTech = event.target.dataset.id
        const title = event.target.dataset.title;
        const status = event.target.dataset.status;

        setCurrentValueTech({ idTech, title, status })

        openModal();
    }

    return (
        <>
            <List onClick={handleData} data-id={id} data-title={title} data-status={status}>
                <Headline pattern={"medium"} weight={"bold"}>{title}</Headline>
                <Text pattern={"small"} color={"grey1"} weight={"regular"}>{status}</Text>
            </List>
        </>
    )
}