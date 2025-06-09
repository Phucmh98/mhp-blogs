import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import rehypeHighlight from 'rehype-highlight';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['img.clerk.com', 'cdn.weatherapi.com', 'picsum.photos', 'res.cloudinary.com'],

  },
  // Allow .mdx extensions for files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};
const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
   rehypePlugins: [rehypeHighlight],
  },
})


export default withMDX(nextConfig)
