import React, { FC, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { IPost } from "./interfaces";
import { Post } from "./components/Post";

export const App: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const loadPosts: () => void = async () => {
        try {
            const res = await axios("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
        } catch (e) {
            console.log(e.response);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    return (
        <div className="App">
            {posts.map((post) => (
                <Post key={post.id} body={post.body} id={post.id} title={post.title} userId={post.userId} />
            ))}
        </div>
    );
};
