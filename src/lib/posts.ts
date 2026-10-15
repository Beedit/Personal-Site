import path from "path";
import type { IPost } from "./interfaces/IPost";
import fs from "node:fs";

const postsDirectory = path.join(process.cwd(), "src", "public", "posts");

const parse = async (fileContents: string) => {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = frontmatterRegex.exec(fileContents);
    const frontMatter = match![1];
    const content = fileContents.replace(frontmatterRegex, "").trim();
    const frontMatterLines = frontMatter.trim().split("\n");

    const data = {
        content: content,
    } as IPost;

    const metadata: { [index: string]: string } = {};

    frontMatterLines.forEach((line) => {
        let [key, ...valueArr] = line.split(": ");
        key = key as keyof typeof data;
        let value = valueArr.join(": ").trim();
        value = value.replace(/^['"](.*)['"]$/, "$1");
        metadata[key] = value;
    });

    data.title = metadata["title"] ?? "";
    data.date = metadata["date"] ?? "";
    data.id = metadata["id"] ?? "";

    return (data);
};

const getFiles = async (dir: string) => {
    return fs.readdirSync(dir).filter(file => path.extname(file).toLowerCase() === ".md");
};

const readFile = async (filePath: string) => {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    return parse(rawContent);
};

const getSortedPosts = async () => {
    const files = await getFiles(postsDirectory);
    const posts: IPost[] = [];

    for (const file of files) {
        const f = await readFile(path.join(postsDirectory, file));
        posts.push(f);
    }

    return posts.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        }
        return -1;
    });
};

const getPostFromID = async (id: string) => {
    const post = (await getSortedPosts()).find((post) => {
        return post.id == id;
    });
    if (post) {
        return post;
    }
    else {
        // should be impossible with a good id
        return undefined;
    }
};

export { getPostFromID, getSortedPosts };
