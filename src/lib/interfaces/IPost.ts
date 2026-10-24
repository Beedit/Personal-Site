import type { MDXContent } from "mdx/types";
import type { IMetadata } from "./IMetadata";

export interface IPost {
    metadata: IMetadata
    content?: MDXContent
}
