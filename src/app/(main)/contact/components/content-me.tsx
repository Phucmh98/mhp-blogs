import { TextAnimate } from "@/components/commons/magicui/text-animate";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const ContentMe = () => {
  return (
    <div className="flex items-center justify-center col-span-1">
      <div className="flex flex-col items-center gap-8">
        <PingAnimate />
        <Avatar className="h-32 w-32 shadow-lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
        <TextAnimate
          className="text-gray-600 dark:text-gray-300 text-sm md:text-base"
          animation="blurInDown"
          as="h1"
        >
          Got a project you’re working on, something exciting to share, or just
          want to connect? I’d love to hear from you. Drop me a message anytime
          and I’ll get back to you soon.
        </TextAnimate>
      </div>
    </div>
  );
};
export default ContentMe;

const PingAnimate = () => {
  return (
    <div className="flex items-center  w-fit gap-2 rounded-full bg-[#B5FF6D]/15 px-4 py-2">
      <span className="relative flex h-[8px] w-[8px]">
        <span
          className="bg-[#B5FF6D] absolute inline-flex h-full w-full rounded-full opacity-75"
          style={{
            animation: "breathe 1.5s ease-in-out infinite",
          }}
        />
        <span className="bg-[#B5FF6D] relative inline-flex h-full w-full rounded-full"></span>
      </span>
      <p className="text-text-primary w-fit  text-gray-700 dark:text-gray-300 text-sm">Available for work</p>
      <style>
        {`
      @keyframes breathe {
        0%, 100% {
          transform: scale(1);
          opacity: 0.8;
        }
        50% {
          transform: scale(2);
          opacity: 0.4;
        }
      }
    `}
      </style>
    </div>
  );
};
