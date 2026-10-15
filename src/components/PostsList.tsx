"use client";
import type { IPost } from "../lib/interfaces/IPost";
import Bar from "./Bar";
import PostCard from "./PostCard";
import { Suspense, use } from "react";

export default function PostsList({
    posts,
}: {
    posts: Promise<IPost[]>
}) {
    const allPosts = use(posts);
    console.log(posts);

    return (
        <Suspense fallback="Loading...">
            <ul>
                {allPosts.map(post => (
                    <li key={post.id}><PostCard title={post.title} date={post.date} id={post.id} content="" /></li>
                ))}
                <Bar />
            </ul>
        </Suspense>
    );
}
