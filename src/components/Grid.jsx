import { useState, useRef } from "react";
import Card from './Card'
import styled from "styled-components";

const Grid = (props) => {
    const [cards, setCards] = useState([
        { id: 0, name: 'Alonso', status: '', img: '/images/Alonso.PNG' },
        { id: 0, name: 'Alonso', status: '', img: '/images/Alonso.PNG' },
        { id: 1, name: 'Bottas', status: '', img: '/images/Bottas.PNG' },
        { id: 1, name: 'Bottas', status: '', img: '/images/Bottas.PNG' },
        { id: 2, name: 'Button', status: '', img: '/images/Button.PNG' },
        { id: 2, name: 'Button', status: '', img: '/images/Button.PNG' },
        { id: 3, name: 'Hamilton', status: '', img: '/images/Hamilton.PNG' },
        { id: 3, name: 'Hamilton', status: '', img: '/images/Hamilton.PNG' },
        { id: 4, name: 'Hulkenberg', status: '', img: '/images/Hulkenberg.PNG' },
        { id: 4, name: 'Hulkenberg', status: '', img: '/images/Hulkenberg.PNG' },
        { id: 5, name: 'Hunt', status: '', img: '/images/Hunt.PNG' },
        { id: 5, name: 'Hunt', status: '', img: '/images/Hunt.PNG' },
        { id: 6, name: 'Lauda', status: '', img: '/images/Lauda.PNG' },
        { id: 6, name: 'Lauda', status: '', img: '/images/Lauda.PNG' },
        { id: 7, name: 'Raikkonen', status: '', img: '/images/Raikkonen.PNG' },
        { id: 7, name: 'Raikkonen', status: '', img: '/images/Raikkonen.PNG' },
        { id: 8, name: 'Ricciardo', status: '', img: '/images/Ricciardo.PNG' },
        { id: 8, name: 'Ricciadro', status: '', img: '/images/Ricciardo.PNG' },
        { id: 9, name: 'Schumacher', status: '', img: '/images/Schumacher.PNG' },
        { id: 9, name: 'Schumacher', status: '', img: '/images/Schumacher.PNG' },
        { id: 10, name: 'Senna', status: '', img: '/images/Senna.PNG' },
        { id: 10, name: 'Senna', status: '', img: '/images/Senna.PNG' },
        { id: 11, name: 'Vettel', status: '', img: '/images/Vettel.PNG' },
        { id: 11, name: 'Vettel', status: '', img: '/images/Vettel.PNG' },
    ])

    const Container = styled.div`
    text-align: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`


return (
    <Container>
        {cards.map((card, index) => {
            return <Card key={index} card={card} index={index}  />
        })}
    </Container>
)
}









export default Grid