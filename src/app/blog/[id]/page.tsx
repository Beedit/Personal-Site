import { Suspense } from "react";
import { getPostFromID } from "../../../lib/posts";
import Post from "../../../components/Post";
import { notFound } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise <{
        id: string
    }>
}) {
    const postID = decodeURI((await params).id);
    const post = await getPostFromID(postID);

    if (post && post.content) {
        return (
            <>
                <Suspense fallback={<div> Loading... </div>}>
                    <Post metadata={post.metadata} content={post.content({})} />
                </Suspense>
            </>
        );
    }
    else {
        notFound();
    }
}
