import Link from "next/link";
import Bar from "../../components/Bar";
import { TumblrIcon, GithubIcon, BlueskyIcon } from "../../components/icons/icons";

export default function Page() {
    return (
        <section>
            <Bar />
            <br />
            <h2>
                If you want to contact me or see my other goings on, you can find my links below :3
            </h2>
            <br />
            <TumblrIcon />
            <Link href="https://strawberrypip.tumblr.com">
                My Tumblr
            </Link>
            <br />
            <Link href="https://github.com/Beedit">
                <GithubIcon />
                My Github
            </Link>
            <br />
            <BlueskyIcon />
            <Link href="https://bsky.app/profile/strawberrypip.bsky.social">
                My Bluesky
            </Link>
            <br />
            <br />
            <br />
            <Bar />
        </section>
    );
}
