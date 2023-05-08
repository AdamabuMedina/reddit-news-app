import React from "react";
import styles from "./commentform.css"
import { useStoreon } from 'storeon/react'


export function CommentForm() {
    const { dispatch, comment } = useStoreon('comment')


    const [touched, setTouched] = React.useState(false)
    const [valueError, setValueError] = React.useState("")

    function handleSubmit(event: React.FormEvent){
        event.preventDefault()
        setTouched(true)
        setValueError(validateValue())

        const isFormValid = !validateValue()
        if (!isFormValid) return

        alert("Форма отправлена!")
    }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>  {
        dispatch('change', (event.target.value))
    }

    function validateValue() {
        if (comment.length <= 3) return "Введите больше 3-х символов"
        return "";
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea className={styles.input}
            value={comment}
            onChange={handleChange}
            aria-invalid={valueError?"true":undefined}
            />
            {touched && validateValue() && (<div style={{color: "red"}}>{validateValue()}</div>)}
            <button type="submit" className={styles.button}>Комментировать</button>
        </form>
    )
}
