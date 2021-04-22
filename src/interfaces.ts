export interface IPost {
    body: string;
    id: number;
    title: string;
    userId: number;
    onPostClick: (postId: number) => void;
}

export interface IComment {
    body: string;
    id: number;
    email: string;
    name: number;
    postId: number;
}
