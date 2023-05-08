import React from 'react';
import styles from './card.css';
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import { Controls } from './Controls';

interface ICardProps {
    post: {
        id: string;
        title: string;
        img: string;
    }
    author: {
        title: string;
        img: string;
    };
}

export function Card({post, author}: ICardProps) {
    return (
        <li className={styles.card}>
            <TextContent post={post} author={author}/>
            <Preview img={post.img}/>
            <Menu/>
            <Controls/>
        </li>
    );
}
