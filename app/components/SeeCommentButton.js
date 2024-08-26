// app/components/VoteButton.js
import { useState } from 'react';
import Chat from './(icon)/Chat';
import styles from './SeeCommentButton.module.css';

export default function PostButton() {
    

    return (
//set width of app/components/VoteButton.js
        <div className={styles.container}>
{/* <p>SeeCommentButton</p> */}
<Chat />
<p>{Math.floor(Math.random() * 300)}</p>

        </div>
      );
}

