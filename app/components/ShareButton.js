// app/components/VoteButton.js
import { useState } from 'react';
import Share from './(icon)/Share';
import styles from './SeeCommentButton.module.css';

export default function PostButton() {
        return (
                <div className={styles.container}>
                        <Share />
                </div>
        );
}

