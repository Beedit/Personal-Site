import { HeartIcon } from "./icons/icons";

export default function Footer() {
    return (
        <footer className="mb-16 bottom-0 block">
            <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                    <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100" rel="noopener noreferrer" target="_blank" href="https://github.com/beedit/Personal-Site">
                        <HeartIcon />
                        <div className="ml-2 h-7">view source</div>
                    </a>
                </li>
            </ul>
            <p className="mt-8 text-neutral-600 dark:text-neutral-300">
                ©
                {" "}
                {new Date().getFullYear()}
                {" "}
                MPL v2.0 License
            </p>
        </footer>
    );
}
