import React, { useRef, useEffect } from 'react';

import { 
    ItemContainer,
    ItemContent
 } from './styles'

const Item = ({ content, id, options, callback }) => {
    const ref = useRef(null)
    useEffect(() => {
        const observer = new IntersectionObserver(callback, options)
        observer.observe(ref.current)
    }, [])

    return (
        <ItemContainer ref={ref}>
            <ItemContent>
                {content.name}
            </ItemContent>
        </ItemContainer>
    );
};

export default Item;