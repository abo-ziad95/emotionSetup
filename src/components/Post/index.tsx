/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { FC } from "react";
import { IPost } from "../../interfaces";

const titleStyle = css({
    boxSizing: 'border-box',
    width: 300,
    height: 200
})

export const Post: FC<IPost> = ({ body, id, title, userId }) => {
    return (
        <div css={titleStyle}>
            <span>{body}</span>
            <span>{id}</span>
            <span>{title}</span>
            <span>{userId}</span>
        </div>
    );
};
