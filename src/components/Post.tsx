import type { IPost } from "../lib/interfaces/IPost";
import Bar from "./Bar";
import SmallBar from "./SmallBar";
import showdown from "showdown";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";

const window = new JSDOM("").window;
const purify = DOMPurify(window);

const converter = new showdown.Converter();

export default function Post({ title, date, content }: IPost) {
    return (
        <>
            <Bar />
            <h1>
                {title}
            </h1>
            <h4>
                {date}
            </h4>
            <SmallBar />
            <br />
            <p className="text-base/8" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: purify.sanitize(converter.makeHtml(String(content).replaceAll("\n", "\n<br>"))) }}>
            </p>
            <br />
            <Bar />
        </>
    );
}
