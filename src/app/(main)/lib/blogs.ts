export interface DetailBlog {
    id: string;
    title: string;
    description: string;
    image?: string;

}

export const blogs: DetailBlog[] = [
    {
        id: "cesiumViewNextjs15",
        title: "Create View Cesium on Nextjs 15",
        description: "A step-by-step guide to integrating Cesium with Next.js 15, ",
        image: "/image/blogs/cesium-banner-blog.png"
    }

]
