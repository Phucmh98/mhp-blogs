
export interface Project {
    id: string
    name: string;
    description: string;
    content?: string;
    image: string;
    urlGithub?: string;
    urlDemo?: string;
    type?: "web" | "mobile" | "desktop";
    status?: "completed" | "in-progress" | "upcoming";
    backgroundColor: string
    startDate?: string;
    contentDetail?: ProjectDetail[];
    role?: string;
    client?: string;
}

export interface ProjectDetail {
    content?: string;
    typeContent?: "title" | "text" | "image" | "video" | "list";
    contentList?: string[];
}

export const selectProjects: Project[] = [
    {
        id: "googleDocsClone",
        name: "Google Docs Clone",
        description: "A clone of Google Docs",
        image: "/image/projects/banner-google-docs-clone.png",
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",
        backgroundColor: "bg-green-200",
        startDate: "2025"
    },
    {
        id: "messengerClone",
        name: "Messenger Clone",
        description: "A clone of Messenger",
        image: "/image/projects/banner-messenger-clone.png",
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",
        backgroundColor: "bg-blue-200",
        startDate: "2025"
    },
    {
        id: "mhpCinema",
        name: "MHP Cinema",
        description: "Front End course completion project",
        image: "/image/projects/carousel_mhp.png",
        urlGithub: "https://github.com/",
        urlDemo: "/",
        type: "web",
        status: "completed",
        backgroundColor: "bg-pink-200",
        startDate: "2023",
        client: "Project Personal",
        role: "Frontend Developer",
        content: "A personal project developed to learn and improve Frontend skills. This web application allows users to book movie tickets online, select cinemas, choose seats, and make payments quickly. Focused on delivering a responsive, user-friendly interface and smooth experience across all devices.",
        contentDetail: [
            {
                typeContent: "title",
                content: "Overview"
            },
            {
                typeContent: "text",
                content: "MHPcinemas is a movie ticket booking website developed by me to training exercises. The project is not only a personal endeavor but also an opportunity for me to apply and expand my knowledge of the technologies I have learned."
            },
            {
                typeContent: "title",
                content: "Sceen Image"
            },
            {
                typeContent: "image",
                content: "/image/projects/mhp_ladingpage.png"
            },
            {
                typeContent: "title",
                content: "Tech Stack"
            },
            {
                typeContent: "list",
                contentList: ["ReactJs","Tailwind CSS", "Ant Design","Axios"]
            },
            {
                typeContent: "title",
                content: "Features"
            },
            {
                typeContent: "list",
                contentList: ["Login/Register", "Home page: Shows movie list (include: Show All, Now Showing, Comming Soon), Find movies, Popup Video", "Detail Movie page: Show information movie, show cinemas", "Detail Cinemas page: Show seats and choose seats, show detail tickets", "Cinemas page: Show detail cinemas and movies, show information cinemas include: name, location, showtime", "User page: CRUD user, find user","User movie: CRUD movie, find movie"]
            },

        ]


    },

]