import type { MDXComponents } from "mdx/types";
import CodeHeader from "./code-header";
import CodeBlock from "./code-block";
import './style/hight-light.css'
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 {...props} className="text-4xl font-bold mb-6 mt-10" />,
    h2: (props) => <h2 {...props} className="text-3xl font-semibold mb-5 mt-8" />,
    h3: (props) => <h3 {...props} className="text-2xl font-semibold mb-4 mt-6" />,
    h4: (props) => <h4 {...props} className="text-xl font-medium mb-3 mt-5" />,
    h5: (props) => <h5 {...props} className="text-lg font-medium mb-2 mt-4" />,
    h6: (props) => <h6 {...props} className="text-base font-medium mb-2 mt-3" />,
    p: (props) => <p {...props} className="text-base leading-7 mb-2" />,
    ul: (props) => <ul {...props} className="list-disc list-inside mb-4 space-y-1" />,
    ol: (props) => <ol {...props} className="list-decimal list-inside mb-4 space-y-1" />,
    li: (props) => <li {...props} className="text-base leading-7" />,
    a: (props) => <a {...props} className="text-blue-400 underline hover:text-blue-300" />,
    blockquote: (props) => (
      <blockquote {...props} className="border-l-4 border-blue-400 pl-4 italic text-zinc-300 my-4" />
    ),
    code: (props) => (
      <code
        {...props}
        className="px-1.5 py-0.5 rounded bg-zinc-700 text-pink-400 font-mono text-sm"
      />
    ),
    pre: (props) => <CodeBlock {...props} />,
    table: (props) => (
      <div className="overflow-x-auto my-6">
        <table {...props} className="w-full border border-zinc-700 border-collapse">
        </table>
      </div>
    ),
    thead: (props) => <thead {...props} className="bg-zinc-800" />,
    tbody: (props) => <tbody {...props} />,
    tr: (props) => <tr {...props} className="border-b border-zinc-600" />,
    th: (props) => <th {...props} className="p-3 border border-zinc-600 text-left font-semibold" />,
    td: (props) => <td {...props} className="p-3 border border-zinc-600" />,
    CodeHeader,
     ...components,
  };
}
