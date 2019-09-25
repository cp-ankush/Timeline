import React from 'react';

import { 
    ItemContainer,
    ItemContent
 } from './styles'

const Item = ({ content }) => {
    return (
        <ItemContainer>
            <ItemContent>
                {content.name}
            </ItemContent>
        </ItemContainer>
    );
};

export default Item;