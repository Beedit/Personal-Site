import { Suspense } from "react";
import PostsList from "../../components/PostsList";
import { getSortedPosts } from "../../lib/posts";

export default function Page() {
    const posts = getSortedPosts();

    return (
        <section>
            <Suspense fallback={<div>Loading...</div>}>
                <PostsList posts={posts} />
            </Suspense>
        </section>
    );
}
