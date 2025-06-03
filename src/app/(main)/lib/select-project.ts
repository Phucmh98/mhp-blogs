
export interface Project {
    name: string;
    description: string;
    url: string;
    content?: string;
    image: string;
    urlGithub?: string;
    urlDemo?: string;
    type?: "web" | "mobile" | "desktop";
    status?: "completed" | "in-progress" | "upcoming";
    backgroundColor: string
    startDate?: string;
}

export const selectProjects: Project[] = [
    {
        name: "Google Docs Clone",
        description: "A clone of Google Docs",
        url: "/",
        image: "/image/projects/banner-google-docs-clone.png",
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",
        backgroundColor: "bg-green-200",
        startDate:"2025"
    },
    {
        name: "Messenger Clone",
        description: "A clone of Messenger",
        url: "/",
        image: "/image/projects/banner-messenger-clone.png",
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",
        backgroundColor: "bg-blue-200",
        startDate:"2025"
    },
    {
        name: "MHP Cinema",
        description: "Front End course completion project",
        url: "/",
        image: "/image/projects/banner-mhp-movie.png",
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",
        backgroundColor: "bg-pink-200",
        startDate:"2023"
    },

]