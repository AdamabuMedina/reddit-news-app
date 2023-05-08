import React from 'react';
import styles from './menuItem.css';
import {EIcons, Icon} from "../../../../Icons";

interface IMenuItemsListProps {
    postId: string;
}

export function MenuItem({postId}: IMenuItemsListProps) {

    return (
        <ul className={styles.menuList}>
            <li onClick={() => console.log(postId)} className={styles.menuItem}>
                <Icon name={EIcons.comment} size={14} />
                <p className={styles.menuItemTitle}>
                Комментарии
                </p>
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.share} size={14} />
                <p className={styles.menuItemTitle}>
                Поделиться
                </p>
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.hide} size={14} />
                <p className={styles.menuItemTitle}>
                Скрыть
                </p>
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.save} size={14} />
                <p className={styles.menuItemTitle}>
                Сохранить
                </p>
            </li>
            <li className={styles.menuItem}>
                <Icon name={EIcons.complain} size={14}/>
                <p className={styles.menuItemTitle}>
                Пожаловаться
                </p>
            </li>
        </ul>
    );
}
