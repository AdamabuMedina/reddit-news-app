import React from 'react';
import styles from './textContent.css';
import {Author} from "./Author";
import {Link} from 'react-router-dom'

interface ICardTextContentProps {
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

export function TextContent({post, author}: ICardTextContentProps) {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <Author title={author.title} img={author.img}/>
            </div>
            <div className={styles.title}>
                <Link to={`/posts/${post.id}`}
                      className={styles.postLink}>
                    {post.title}
                </Link>
            </div>
        </div>
    );
}
