import AnimatedContent from "@/components/animated-content";
import { BorderBeam } from "@/components/magicui/border-beam";
import Link from "next/link";

const InfoAboutPage = () => {
  return (
    <AnimatedContent>
      <div className="relative w-full text-gray-500 border rounded-xl p-1.5 sm:p-5 mt-3 overflow-hidden text-xs sm:text-base">
        <h2 className="mb-2 text-base sm:text-2xl font-medium">About the page</h2>
        <ul className="list-disc pl-7">
          <li>
            Framework:&nbsp;
            <Link
              href="https://nextjs.org/"
              target="_blank"
              className="no-underline hover:underline text-amber-600"
            >
              Next.js
            </Link>
          </li>
          <li>
            Authentication:&nbsp;
            <Link
              href="https://clerk.com/"
              target="_blank"
              className="no-underline hover:underline text-amber-600"
            >
              Clerk
            </Link>
          </li>
          <li>
            Deployment:&nbsp;
            <Link
              href="https://vercel.com/"
              target="_blank"
              className="no-underline hover:underline text-amber-600"
            >
              Vercel
            </Link>
          </li>
          <li>
            Styling:&nbsp;
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              className="no-underline hover:underline text-amber-600"
            >
              Tailwindcss
            </Link>
          </li>
        </ul>
        <div className="ml-2 mt-3 w-full flex flex-col ">
          <span>
            Thanks to{" "}
            <Link
              href="https://hieu-buiminh.vercel.app/"
              className="font-medium text-green-500 hover:text-green-600 hover:underline"
            >
              Hieu-buiminh
            </Link>
            {" "}for creating his blog.
          </span>
          <span>
            When I didn’t know how to start my own blog, his project gave me an
            idea and helped me get started with Next.js and TailwindCSS.
          </span>
          <span>
            If you don’t know where to start, you can check out his project. It
            might help you too.
          </span>
        </div>
        <BorderBeam
          size={120}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 30,
          }}
        />
      </div>
    </AnimatedContent>
  );
};

export default InfoAboutPage;
