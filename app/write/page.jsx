"use client"
import { usePost } from "@/context/UserPostContext";
import { useWriteContext } from "../../context/WriteContext";

import Link from 'next/link';

const Write = () => {
    const { topic, setTopic, description, setDescription } = useWriteContext();


    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Submitted topic:", topic);
                    console.log("Submitted description:", description);
                }}
            >
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter a topic"
                />
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a description"
                ></textarea>
                <Link href="/user-post">
                <button type="submit">Submit</button>
</Link>
            </form>
        </div>
    )
}

export default Write