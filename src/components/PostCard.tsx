import Link from "next/link";
import type { IPost } from "../lib/interfaces/IPost";
import Bar from "./Bar";

export default function PostCard({ title, date, id }: IPost) {
    return (
        <Link href={`blog/${id}`} className="drop-shadow-none">
            <Bar />
            <div className="flex gap-6 p-3 md:gap-8 rounded-2xl justify-between">
                <span className="flex-col text-medium font-medium">{title}</span>
                <span className="flex-col font-small text-sky-500 self-end-safe items-end">{date}</span>
            </div>
        </Link>
    );
}
