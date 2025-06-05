import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useClerk, useClientContext } from "@clerk/shared/react/index";
import type { OAuthStrategy } from "@clerk/types";
import { usePathname } from "next/navigation";

const DialogUserLogin = () => {
  const clerkInstance = useClientContext();
  const pathname = usePathname();

  const loginWith = ({ strategy }: { strategy: OAuthStrategy }) => {
    clerkInstance?.signIn.authenticateWithRedirect({
      strategy: strategy,
      redirectUrl: pathname,
      redirectUrlComplete: pathname,
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer rounded-xl py-3">
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[350px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="flex justify-center">Login</DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center text-center">
            <span className="mb-2">Sign in for more fun experiences. 🤪</span>
            <Image
              src="/image/gif/hutao-meme.gif"
              width={75}
              height={75}
              alt="hutao-meme"
              className="drop-shadow-sm drop-shadow-amber-500"
              priority={true}
            />
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 grid-cols-2 w-full">
          <Button
            onClick={() => {
              loginWith({ strategy: "oauth_github" });
            }}
            className="w-full"
            variant="outline"
          >
            <Image
              src="/image/gif/logo-github-in-reveal.gif"
              width={25}
              height={25}
              alt="github_login"
              priority={true}
            />
            Github
          </Button>
          <Button
            onClick={() => {
              loginWith({ strategy: "oauth_google" });
            }}
            className="w-full"
            variant="outline"
          >
            <Image
              src="/image/gif/logo-google-in-reveal.gif"
              width={25}
              height={25}
              priority={true}
              alt="google_login"
            />
            Google
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogUserLogin;
