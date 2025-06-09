import { useRef, useState } from "react";
import { Copy, Check } from "lucide-react";

type CodeBlockProps = {
  children: React.ReactNode;
};

export default function CodeBlock({ children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = () => {
    if (preRef.current) {
      const text = preRef.current.innerText;
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="relative mb-4 bg-zinc-700 p-4 overflow-auto">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 rounded bg-zinc-700 p-1 text-white hover:bg-zinc-600"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre ref={preRef}>{children}</pre>
    </div>
  );
}
