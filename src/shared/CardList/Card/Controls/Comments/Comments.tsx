import React from 'react'
import styles from './comments.css'
import { CommentsButton } from './CommentsButton'

export function Comments() {
  return (
    <div className={styles.comments}>
      <CommentsButton />
    </div>
  )
}