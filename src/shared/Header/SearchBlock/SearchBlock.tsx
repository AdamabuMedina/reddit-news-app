import React from 'react';
import styles from './searchBlock.css';
import {UserBlock} from './UserBlock';

export function SearchBlock() {
    return (
        <div className={styles.searchBlock}>
            <UserBlock />
        </div>
    )
}