export const dynamic = 'force-dynamic';
import { Suspense } from "react";
import PostsList from "../../components/PostsList";
import { getSortedPosts } from "../../lib/posts";

export default async function Page() {
    const posts = await getSortedPosts();

    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <PostsList posts={posts} />
            </Suspense>
        </section>
    );
}
