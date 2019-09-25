import React from 'react';
import { Content } from '../../db'
import TimelineItem from './item'
import {
    Container
} from './styles'

const Timeline = () => {
    return (
        <Container>
            {
                Content.map((content) => (<TimelineItem content={content} />))
            }
        </Container>
    );
};

export default Timeline;