import Image from "next/image";
import pfp from "../public/image/pfp.webp";
import Bar from "./Bar";

export default function About() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                My Site :3
            </h1>
            <div className="flex justify-center sm:px-12 p-8">
                <Image src={pfp} alt="" className="rounded-xl pfpImg" loading="eager" />
            </div>
            <br />

            <Bar />
            <br />
            <p className="mb-4">
                Hi!, I&apos;m Pip!
                <br />
                <br />
                I&apos;m a ferret with a keyboard who happens to write a lot of Typecript x3
            </p>
            <div className="my-8">
            </div>
            <Bar />
        </section>
    );
}
