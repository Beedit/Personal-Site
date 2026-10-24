export const dynamic = "force-dynamic";
import { Suspense } from "react";
import PostsList from "../../components/PostsList";
import { getSortedPosts } from "../../lib/posts";
import type { IMetadata } from "../../lib/interfaces/IMetadata";

export default async function Page() {
    const posts = await getSortedPosts();
    const metadatas: IMetadata[] = [];

    for (const post of posts) {
        metadatas.push(post.metadata);
    }

    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <PostsList posts={metadatas} />
            </Suspense>
        </section>
    );
}
