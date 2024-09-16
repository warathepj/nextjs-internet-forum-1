// app/components/VoteButton.js
import { useState } from 'react';
import Share from './(icon)/Share';
import styles from './SeeCommentButton.module.css';

export default function PostButton() {


        return (
                //set width of app/components/VoteButton.js
                <div className={styles.container}>
                        {/* <p>ShareButton</p> */}
                        <Share />

                </div>
        );
}

