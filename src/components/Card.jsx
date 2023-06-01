import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
    
`

const Image = styled.img`
    
`


const Card = ({ card }) => {
    


    return (
        <CardContainer>
            <Image src={card.img} alt={card.name} />
        </CardContainer>
    )
}

export default Card