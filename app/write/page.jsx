// app/write/page/
//if app/write/page/username = false, redirect to /register
"use client"
import { usePost } from "@/context/UserPostContext";
import { useWriteContext } from "../../context/WriteContext";
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Write = () => {
    const { topic, setTopic, description, setDescription } = useWriteContext();
  const { username } = useAuth();
  const router = useRouter();

  if (!username) {
    router.push('/register'); 
    return null;
  }

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
                    rows="12" cols="45"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter a description, Start a new line with '/'"
                ></textarea>
                <Link href="/user-post">
                <button type="submit">Submit</button>
</Link>
            </form>
        </div>
    )
}

export default Write