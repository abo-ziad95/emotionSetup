/** @jsxImportSource @emotion/react */
import React, { FC, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { IComment, IPost } from "./interfaces";
import { Post } from "./components/Post";

export const App: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [comments, setComments] = useState<IComment[]>([]);
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

    const onPostClick: (postId: number) => void = async (postId: number) => {
        try {
            const res = await axios(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
            setComments(res.data);
        } catch (e) {
            console.log(e.response);
        }
    };

    return (
        <>
            {comments.length > 0 && (
                <div css={{ display: "flex", flexDirection: "column" }}>
                    comments
                    {comments.map((comment) => (
                        <div key={comment.id} css={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                            <span>email: {comment.email}</span>
                            <span>name: {comment.name}</span>
                            <span>body: {comment.body}</span>
                        </div>
                    ))}
                </div>
            )}
            <div css={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                {posts.map((post) => (
                    <Post onPostClick={onPostClick} key={post.id} body={post.body} id={post.id} title={post.title} userId={post.userId} />
                ))}
            </div>
        </>
    );
};
