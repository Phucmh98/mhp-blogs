
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
        urlGithub: "https://github.com/Phucmh98/clone-google-docs",
        urlDemo: "https://clone-google-docs-sable.vercel.app/",
        type: "web",
        client: "Project Personal",
        role: "Frontend Developer",
        status: "completed",
        backgroundColor: "bg-green-200",
        startDate: "2025",
        content: "Cloning key features of Google Docs (real-time editing, multi-user cursors, comments, notifications, etc.) to experiment with realtime collaboration and integrate Convex as the backend.",
        contentDetail: [
            {
                typeContent: "title",
                content: "Overview"
            },
            {
                typeContent: "text",
                content: "This is a personal practice project built with Next.js, aiming to explore and combine modern web technologies such as Tiptap, Clerk, and Convex. The project replicates several key features of Google Docs, including real-time collaboration, multi-user cursor tracking, inline comments, and notification handling. The main goal is to experiment with Convex as a backend platform and evaluate its performance and developer experience in building real-time, collaborative applications."
            },
            {
                typeContent: "title",
                content: "Sceen Image"
            },
            {
                typeContent: "image",
                content: "/image/projects/img-google-doc-clone.png"
            },
            {
                typeContent: "title",
                content: "Tech Stack"
            },
            {
                typeContent: "list",
                contentList: ["Nextjs", "TailwindCSS", "Tiptap", "Clerk", "Convex"]
            },
            {
                typeContent: "title",
                content: "Features"
            },
            {
                typeContent: "list",
                contentList: ["Login/Register with Clerk for secure authentication",
                    "Home page: Create new documents, create or join document organizations, real-time operations on documents (Rename, remove, delete)",
                    "Detail Document page: Real-time collaborative editing, multi-user cursors, inline comments,...",
                    "Notifications: Live updates on changes, comments, and user activity",
                    "Convex backend handles all real-time syncing, data persistence, and access control"
                ]
            },

        ]
    },
    {
        id: "messengerClone",
        name: "Messenger Clone",
        description: "A clone of Messenger",
        image: "/image/projects/banner-messenger-clone.png",
        urlGithub: "https://github.com/Phucmh98/clone-messenger",
        urlDemo: "/https://clone-messenger-rho.vercel.app/",
        type: "web",
        client: "Project Personal",
        role: "Frontend Developer",
        status: "completed",
        backgroundColor: "bg-blue-200",
        startDate: "2025",
        content: "This is a learning project aimed at building a real-time messaging application inspired by Facebook Messenger.",
        contentDetail: [

            {
                typeContent: "title",
                content: "Sceen login"
            },
            {
                typeContent: "image",
                content: "/image/projects/clone-messenger-login.png"
            },
            {
                typeContent: "title",
                content: "Sceen conversation"
            },
            {
                typeContent: "image",
                content: "/image/projects/clone-messenger-conversations.png"
            },
            {
                typeContent: "title",
                content: "Tech Stack"
            },
            {
                typeContent: "list",
                contentList: ["Nextjs", "Tailwind CSS", "Prisma", "MongoDB", "Pusher"]
            },
            {
                typeContent: "title",
                content: "Features"
            },
            {
                typeContent: "list",
                contentList: ["User Authentication: Secure account registration and login.",
                    "Real-time Messaging: Send and receive instant messages between users.",
                    "Conversation Management: Display a list of conversations.",
                    "Responsive User Interface: Optimized display on different screen sizes (desktop, mobile).",
                ]
            },
            {
                typeContent: "title",
                content: "Goals"
            },
            {
                typeContent: "list",
                contentList: ["Build web applications with Next.js.",
                    "Explore and implement real-time messaging features.",
                    "Practice state management and user interaction within the React/Next.js environment.",
                    "Work with databases and user authentication.",
                ]
            },

        ]
    },
    {
        id: "mhpCinema",
        name: "MHP Cinema",
        description: "Front End course completion project",
        image: "/image/projects/carousel_mhp.png",
        urlGithub: "https://github.com/Phucmh98/MHPcinemas",
        urlDemo: "https://mhpcinemas.surge.sh/",
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
                contentList: ["ReactJs", "Tailwind CSS", "Ant Design", "Axios"]
            },
            {
                typeContent: "title",
                content: "Features"
            },
            {
                typeContent: "list",
                contentList: ["Login/Register with Clerk for secure authentication",
                    "Home page: Create new documents, create or join document organizations, real-time operations on documents (Rename, remove, delete)",
                    "Detail Document page: Real-time collaborative editing, multi-user cursors, inline comments,...",
                    "Notifications: Live updates on changes, comments, and user activity",
                    "Convex backend handles all real-time syncing, data persistence, and access control"
                ]
            },

        ]


    },

]