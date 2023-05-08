import React from 'react';
import styles from './author.css';

interface ICardAuthorProps {
    title: string;
    img?: string;
}

export function Author({title, img}: ICardAuthorProps) {
    const defaultImg = "https://cdn.dribbble.com/users/1769954/screenshots/14729942/media/60aadac4997286b2fb2793b7ef5b9928.png?compress=1&resize=1600x1200";

    return (
        <a className={styles.userLink} href="#user-url">
            <img className={styles.avatar}
                 src={img ? img : defaultImg}
                 alt="avatar"
            />
            <span className={styles.username}>{title}</span>
        </a>
    );
}
