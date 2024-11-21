function UpRightArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    );
}

function WorkIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <path d="M12 12h.01" />
            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
            <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}

type WorkExperienceItem = {
    name: string;
    link: string;
    position: string;
    location: string;
    date: string;
    description: string;
};

type ExperienceItem = {
    name: string;
    link: string;
    position: string;
    description: string;
};

function ExperienceSection({
    title,
    items,
}: {
    title: string;
    items: ExperienceItem[];
}) {
    return (
        <section className="text-left">
            <h3 className="mb-6 text-xl font-medium">{title}</h3>
            {items.map((item, index) => (
                <div key={index}>
                    <a
                        href={item.link}
                        target="_blank"
                        className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
                    >
                        {item.name}
                    </a>
                    <p className="mt-2">{item.position}</p>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        {item.description}
                    </p>
                    {index !== items.length - 1 && <div className="mt-6"></div>}
                </div>
            ))}
        </section>
    );
}

function WorkExperienceSection({
    title,
    items,
}: {
    title: string;
    items: WorkExperienceItem[];
}) {
    return (
        <section className="text-left">
            <h3 className="mb-6 text-xl font-medium">{title}</h3>
            {items.map((item, index) => (
                <div key={index}>
                    <a
                        href={item.link}
                        target="_blank"
                        className="font-medium underline decoration-neutral-400 decoration-[0.1em] underline-offset-2 dark:decoration-neutral-600"
                    >
                        {item.name}
                    </a>
                    <p className="mt-2">{item.position}</p>
                    <p className="mt-1 italic">{item.location}</p>
                    <p className="italic">{item.date}</p>
                    <p className="mt-2 text-neutral-700 dark:text-neutral-300">
                        {item.description}
                    </p>
                    {index !== items.length - 1 && <div className="mt-6"></div>}
                </div>
            ))}
        </section>
    );
}

export default function HomePage() {
    const workItems = [
        {
            name: "Yamaha Motors Canada",
            link: "https://www.yamaha-motor.ca/en/homepage",
            position: "Software Developer",
            date: "2024 May - 2024 Aug",
            location: "Toronto, ON",
            description:
                "Worked under the accesories team in creating web scrapping & data validaton applications and internal utility tools",
        },
        {
            name: "Kohinoor Fashion Studio",
            link: "",
            position: "Software Developer",
            date: "2024 Jan - 2024 Apr",
            location: "Toronto, ON",
            description:
                "Worked as a Full-Stack web developer in charge of making a web app for displaying businesses products and information",
        },
    ] satisfies WorkExperienceItem[];

    const projectItems = [
        {
            name: "Expensify",
            link: "https://github.com/talz-a/Expensify",
            position: "Creator and maintainer",
            description:
                "full-stack expense tracking application that allows users to manage their expenses easily.",
        },
        {
            name: "Monkeylang interpreter",
            link: "https://github.com/talz-a/monkeylang-interpreter",
            position: "Creator and maintainer",
            description:
                "A interpreter for a javascript like language written in Go.",
        },
        {
            name: "texdle",
            link: "https://github.com/talz-a/texdle",
            position: "Creator and maintainer",
            description:
                "A wordle clone made with React, TypeScript, TailwindCSS, Vite and Zustand.",
        },
        {
            name: "all projects →",
            link: "https://github.com/talz-a",
            position: "",
            description: "",
        },
    ] satisfies ExperienceItem[];

    return (
        <main className="text-left">
            <h1 className="mb-4 text-2xl font-medium tracking-tighter">
                Talal Ahmad
            </h1>

            <div className="mb-4 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <LocationIcon />
                    <p>Toronto, Ontario</p>
                </div>

                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <WorkIcon />
                    <p className="inline-flex">CS + BBA @WLU</p>
                </div>
            </div>

            <p className="prose prose-neutral dark:prose-invert">
                Hello, I&apos;m <span className="italic">Talal</span>. I&apos;m
                a third year CS & BBA student at Wilfrid Laurier. I enjoy
                building{" "}
                <span className="italic">
                    sites, apps, cli tools, & anything in the terminal
                </span>
                . <span className="italic">When I&apos;m not coding</span>, you
                will probably catch me listening to music, or hunting for the
                next steal on vintage clothing.
            </p>

            <div className="my-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                <WorkExperienceSection title="Work" items={workItems} />
                <ExperienceSection title="Projects" items={projectItems} />
            </div>

            <h3 className="mt-8 text-xl font-medium">Links</h3>
            <ul className="font-sm mt-4 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:talal.gl2004@gmail.com"
                    >
                        <p className="mr-1 h-7">email</p>
                        <UpRightArrowIcon />
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://github.com/talz-a"
                    >
                        <p className="mr-1 h-7">github</p>
                        <UpRightArrowIcon />
                    </a>
                </li>
                <li>
                    <a
                        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.linkedin.com/in/talal--ahmad/"
                    >
                        <p className="mr-1 h-7">linkedin</p>
                        <UpRightArrowIcon />
                    </a>
                </li>
            </ul>
        </main>
    );
}
