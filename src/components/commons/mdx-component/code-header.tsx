interface CodeHeaderProps {
  text: string;
}

export default function CodeHeader({ text }: CodeHeaderProps) {
  return (
    <div className="  bg-zinc-800  text-neutral-300 rounded-t-md px-4 py-2 font-mono text-sm">
      {text}
    </div>
  );
}
