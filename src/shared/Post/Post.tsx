import React from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router";
import { CommentFormContainer } from "../CommentForm/CommentFormContainer";
import styles from "./post.css"
import { PostsComments } from "./PostsComments";

interface IPost {
    postId: string
    onClose?: () => void
}

export function Post() {
    const ref = React.useRef<HTMLDivElement>(null)
    const node = document.querySelector("#modal_root")
    const history = useHistory()

    React.useEffect(() => {
        function handleClick(event: MouseEvent) {
            if(event.target instanceof Node && !ref.current?.contains(event.target)) {
                history.push('/posts')
            }
        }

        document.addEventListener("click", handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    if (!node) return null

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2 className={styles.title}>Следует Отметить, что новая модель организационной деятельности поможет</h2>

            <div className={styles.content}>
                <p className={styles.descr}>
                    Есть над чем задуматься: тщятельное иследование конкурентов представляют собой Есть над чем задуматься: тщятельное иследование конкурентов представляют собой Есть над чем задуматься: тщятельное иследование конкурентов представляют собой Есть над чем задуматься: тщятельное иследование конкурентов представляют собой Есть над чем задуматься: тщятельное иследование конкурентов представляют собой Есть над чем задуматься: тщятельное иследование конкурентов представляют собой
                </p>
            </div>
            <CommentFormContainer mainComment={true} uncontrolled={false}/>
            <PostsComments/>
        </div>
    ), node)
}