import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
    width: 280px;
	height: 350px;
	overflow: hidden;
	border-radius: 15px;
	margin: 15px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    margin: 5px;
	max-width: 265px;
	max-height: 225px;
	border-radius: 15px;
`


const Card = ({ card }) => {
    


    return (
        <CardContainer>
            <Image src={card.img} alt={card.name} />
        </CardContainer>
    )
}

export default Card