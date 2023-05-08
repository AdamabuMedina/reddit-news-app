import React from 'react';
import styles from './preview.css';

interface ICardPreviewProps {
    img: string;
}


export function Preview({img}: ICardPreviewProps) {
    const defaultImg = "https://i.pinimg.com/originals/e3/76/a7/e376a7f0d7ee2efe7e822e72565e5597.jpg"

    return (
        <div className={styles.preview}>
            <img className={styles.previewImg}
                 src={img.startsWith("https://") ? img : defaultImg}/>
        </div>
    );
}
