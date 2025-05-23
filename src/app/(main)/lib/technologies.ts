import type { SVGIcon } from "@/components/commons/icons/svg-icons";

export const technologies = [
    {
        name: 'JavaScript',
        icon: 'JavaScript',
        url: 'https://www.javascripttutorial.net',
    },
    {
        name: 'TypeScript',
        icon: 'TypeScript',
        url: 'https://tailwindcss.com',
    },
    {
        name: 'CShape',
        icon: 'CShape',
        url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    },
    {
        name: 'Dart',
        icon: 'Dart',
        url: 'https://dart.dev/',
    },
    {
        name: 'Html',
        icon: 'Html',
        url: '/',
    },
    {
        name: 'Css',
        icon: 'Css',
        url: 'https://web.dev/css',
    },
    {
        name: 'Sass',
        icon: 'Sass',
        url: 'https://sass-lang.com/',
    },
    {
        name: 'Bootstrap',
        icon: 'Bootstrap',
        url: 'https://getbootstrap.com/',
    },
    {
        name: 'TailwindCSS',
        icon: 'TailwindCSS',
        url: 'https://tailwindcss.com/',
    },
    {
        name: 'AntDesign',
        icon: 'AntDesign',
        url: 'https://ant.design/',
    },
    {
        name: 'React',
        icon: 'React',
        url: 'https://react.dev/',
    },
    {
        name: 'NextJS',
        icon: 'NextJS',
        url: 'https://nextjs.org/',
    },
    {
        name: 'Blazor',
        icon: 'Blazor',
        url: 'https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor',
    },
    {
        name: 'Webpack',
        icon: 'Webpack',
        url: 'https://webpack.js.org/',
    },
    {
        name: 'Flutter',
        icon: 'Flutter',
        url: 'https://flutter.dev/',
    },
    {
        name: 'Npm',
        icon: 'Npm',
        url: 'https://www.npmjs.com/',
    },
    {
        name: 'Vite',
        icon: 'Vite',
        url: 'https://vite.dev/',
    },
    {
        name: 'Vercel',
        icon: 'Vercel',
        url: 'https://vercel.com/',
    },
    {
        name: 'Shadcn',
        icon: 'Shadcn',
        url: 'https://ui.shadcn.com/',
    },
    {
        name: 'Clerk',
        icon: 'Clerk',
        url: 'https://clerk.com/',
    },
    {
        name: 'Convex',
        icon: 'Convex',
        url: 'https://www.convex.dev/',
    },

] as const satisfies Technology[]

export interface Technology {
    name: string
    url: string
    icon: SVGIcon
}
