import { Container } from "../../styles.ts";
import estrela from '../../images/estrela.png'
import { List, ListItem, Tag, Tags, Title } from "./styles.ts";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type Restaurant = {
    id: number
    titulo: string
    destacado?: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
}

const RestList = () => {
    const [rests, setRests] = useState<Restaurant[]>([])
    const navigate = useNavigate()

    useEffect(() => { fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
        .then((res) => res.json())
        .then((data) => setRests(data))}, []);

    const handleClick = (id: number) => {
        navigate(`/${id}`)
    }

    return (
    <Container>
        <List>
            {rests.map((rest) => (
                <ListItem key={rest.id}>
                <img src={rest.capa} alt={rest.titulo}/>
                <Tags>
                    {rest.destacado ? <Tag>Destaque da semana</Tag> : null}
                    <Tag>{rest.tipo}</Tag>
                </Tags>
                <Title>{rest.titulo} <span>{rest.avaliacao} <img src={estrela} alt="Estrela" /></span></Title>
                <p className="description">{rest.descricao}</p>
                <button type="button" onClick={() => handleClick(rest.id)}>Saiba mais</button>
            </ListItem>))}
        </List>
    </Container>
)}

export default RestList