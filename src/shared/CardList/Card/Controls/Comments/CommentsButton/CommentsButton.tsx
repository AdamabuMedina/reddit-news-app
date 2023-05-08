import React from 'react'
import styles from './commentsButton.css'
import {EIcons, Icon} from "../../../../../Icons";

export function CommentsButton() {
  return (
    <button className={styles.commentsButton}>
      <Icon name={EIcons.comment} size={15}/>
      <span className={styles.commentsNumber}>13</span>
    </button>
  )
}