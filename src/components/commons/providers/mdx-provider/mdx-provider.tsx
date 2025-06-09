'use client';

import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "../../mdx-component/mdx-component";

function MdxProvider ({ children }: { children: React.ReactNode }) {
    return <MDXProvider components={useMDXComponents({})}>{children}</MDXProvider>
}

export default MdxProvider;