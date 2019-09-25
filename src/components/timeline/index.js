import React from 'react';
import { Content } from '../../db'
import TimelineItem from './item'
import {
    Container
} from './styles'

const options = {
    root: null,
    rootMargin: '10px',
    threshold: 1
}

const callback = (entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.intersectionRect.y > 0) {
            entry.target.style.opacity = 0.2
        } else {
            entry.target.style.opacity = 1
        }
    })
}

const Timeline = () => {
    return (
        <Container>
            {
                Content.map((content) => {
                    return (<TimelineItem 
                        content={content} 
                        key={content.id} 
                        id={content.id} 
                        options={options}
                        callback={callback}
                        />)
                })
            }
        </Container>
    );
};

export default Timeline;