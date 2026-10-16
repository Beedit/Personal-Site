"use client";
import type { IPost } from "../lib/interfaces/IPost";
import Bar from "./Bar";
import PostCard from "./PostCard";
import { Suspense } from "react";

export default function PostsList({
    posts,
}: {
    posts: IPost[]
}) {
    return (
        <Suspense fallback="Loading...">
            <ul>
                {posts.map(post => (
                    <li key={post.id}><PostCard title={post.title} date={post.date} id={post.id} content="" /></li>
                ))}
                <Bar />
            </ul>
        </Suspense>
    );
}
