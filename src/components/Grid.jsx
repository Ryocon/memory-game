import { useState, useRef } from "react";
import Card from './Card'

const Grid = (props) => {
    const [cards, setCards] = useState([
        { id: 0, name: 'Alonso', status: '', img: '/images/Alonso.PNG' },
        { id: 0, name: 'Alonso', status: '', img: '/images/Alonso.PNG' },
        { id: 1, name: 'Bottas', status: '', img: '/images/Bottas.PNG' },
        { id: 1, name: 'Bottas', status: '', img: '/images/Bottas.PNG' },
        { id: 2, name: 'Button', status: '', img: '/images/Along.PNG' },
        { id: 2, name: 'Button', status: '', img: '/images/Along.PNG' },
        { id: 3, name: 'Hamilton', status: '', img: '/images/Along.PNG' },
        { id: 3, name: 'Hamilton', status: '', img: '/images/Along.PNG' },
        { id: 4, name: 'Hulkenberg', status: '', img: '/images/Along.PNG' },
        { id: 4, name: 'Hulkenberg', status: '', img: '/images/Along.PNG' },
        { id: 5, name: 'Hunt', status: '', img: '/images/Along.PNG' },
        { id: 5, name: 'Hunt', status: '', img: '/images/Along.PNG' },
        { id: 6, name: 'Lauda', status: '', img: '/images/Along.PNG' },
        { id: 6, name: 'Lauda', status: '', img: '/images/Along.PNG' },
        { id: 7, name: 'Raikkonen', status: '', img: '/images/Along.PNG' },
        { id: 7, name: 'Raikkonen', status: '', img: '/images/Along.PNG' },
        { id: 8, name: 'Ricciardo', status: '', img: '/images/Along.PNG' },
        { id: 8, name: 'Ricciadro', status: '', img: '/images/Along.PNG' },
        { id: 9, name: 'Schumacher', status: '', img: '/images/Along.PNG' },
        { id: 9, name: 'Schumacher', status: '', img: '/images/Along.PNG' },
        { id: 10, name: 'Senna', status: '', img: '/images/Along.PNG' },
        { id: 10, name: 'Senna', status: '', img: '/images/Along.PNG' },
        { id: 11, name: 'Vettel', status: '', img: '/images/Along.PNG' },
        { id: 11, name: 'Vettel', status: '', img: '/images/Along.PNG' },
    ])
}

export default Grid