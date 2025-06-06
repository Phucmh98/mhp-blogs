import FuzzyText from "@/components/commons/reactbits/fuzzu-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <FuzzyText baseIntensity={0.1} color="#fe9a00">
          404
        </FuzzyText>
        <FuzzyText baseIntensity={0.1} color="#fe9a00" fontSize={30}>
          Page not found
        </FuzzyText>
        <Link href="/">
          <ShinyButton className="rounded-2xl">
            <span>Go to Home</span>
          </ShinyButton>
        </Link>
      </div>
    </section>
  );
}
