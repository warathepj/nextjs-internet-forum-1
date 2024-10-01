// app/components/SeeCommentButton.js/
import { useState } from 'react';
import Chat from './(icon)/Chat';

import styles from './SeeCommentButton.module.css';
import RandomComment from './RandomComment';

export default function SeeCommentButton({ id }) {
        return (
                <div className={styles.container}>
                        <Chat />
                        <p>{id === 'user' ? 0 : 167}</p>
                </div>
        );
}

