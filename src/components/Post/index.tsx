/** @jsxImportSource @emotion/react */
import React, { FC } from "react";
import { IPost } from "../../interfaces";

export const Post: FC<IPost> = ({ body, id, title, userId, onPostClick }) => {
    return (
        <div
            onClick={() => onPostClick(id)}
            css={{ cursor: "pointer", width: "300px", border: "1px solid grey", margin: "10px", padding: "10px" }}
        >
            <div css={{ fontSize: "20px", marginBottom: "10px" }}>title: {title}</div>
            <div css={{ fontSize: "18px" }}>content: {body}</div>
        </div>
    );
};
