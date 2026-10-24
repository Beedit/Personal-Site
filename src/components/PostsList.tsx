"use client";
import type { IMetadata } from "../lib/interfaces/IMetadata";
import Bar from "./Bar";
import PostCard from "./PostCard";
import { Suspense } from "react";

export default function PostsList({
    posts,
}: {
    posts: IMetadata[]
}) {
    return (
        <Suspense fallback="Loading...">
            <ul>
                {posts.map(post => (
                    <li key={post.id}><PostCard title={post.title} date={post.date} id={post.id} /></li>
                ))}
                <Bar />
            </ul>
        </Suspense>
    );
}
