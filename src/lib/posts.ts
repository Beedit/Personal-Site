import path from "path";
import fs from "node:fs";
import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import type { IPost } from "./interfaces/IPost";

const postsDirectory = path.join(process.cwd(), "src", "public", "posts");

const getFiles = async (dir: string) => {
    return fs.readdirSync(dir).filter(file => path.extname(file).toLowerCase() === ".mdx");
};

const readFile = async (id: string) => {
    const mdxContent = fs.readFileSync(`src/public/posts/${id}`, { encoding: "utf-8" });
    const { metadata, default: content } = (await evaluate(mdxContent, {
        baseUrl: import.meta.url,
        ...runtime,
    }));
    return {
        metadata: metadata,
        content: content,
    } as IPost;
};

const getSortedPosts = async () => {
    const posts: IPost[] = [];

    for (const file of await getFiles(postsDirectory)) {
        posts.push(await readFile(file));
    }

    return posts.sort((a, b) => {
        if (a.metadata.date > b.metadata.date) {
            return 1;
        }
        else {
            return -1;
        }
        return 0;
    });
};

const getPostFromID = async (id: string) => {
    const posts = await getSortedPosts();

    for (const post of posts) {
        if (post.metadata.id == id) {
            return post;
        }
    }
    return undefined;
};

export { getPostFromID, getSortedPosts };
