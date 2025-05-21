
export interface Project {
    name: string;
    description: string;
    url: string;
    content?: string;
    image: string;
    tags: string[];
    urlGithub?: string;
    urlDemo?: string;
    type?: "web" | "mobile" | "desktop";
    status?: "completed" | "in-progress" | "upcoming";
}

export const selectProjects: Project[] = [
    {
        name: "Google Docs Clone",
        description: "A clone of Google Docs",
        url: "/",
        image: "/image/projects/banner-google-docs-clone.png",
        tags: ["React", "NextJS", "TailwindCSS"],
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",

    },
    {
        name: "Messenger Clone",
        description: "A clone of Messenger",
        url: "/",
        image: "/image/projects/banner-messenger-clone.png",
        tags: ["React", "NextJS", "TailwindCSS"],
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",

    },
    {
        name: "MHP Cinema",
        description: "Front End coursecompletion project",
        url: "/",
        image: "/image/projects/banner-mhp-movie.png",
        tags: ["React", "NextJS", "TailwindCSS"],
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",

    },
    
]