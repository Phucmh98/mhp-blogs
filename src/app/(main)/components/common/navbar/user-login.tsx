"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import { useClerk, useClientContext } from "@clerk/shared/react/index";
import type { OAuthStrategy } from "@clerk/types";
import { LogOut } from "lucide-react";
const UserLogin = () => {
  const pathname = usePathname();
  const clerkInstance = useClientContext();
  const { signOut, user } = useClerk();

  const loginWith = ({ strategy }: { strategy: OAuthStrategy }) => {
    clerkInstance?.signIn.authenticateWithRedirect({
      strategy: strategy,
      redirectUrl: pathname,
      redirectUrlComplete: pathname,
    });
  };
  return (
    <div className="flex items-center">
      {user ? (
        // User is logged in
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="cursor-pointer">
            <Image
              src={user?.imageUrl || "/image/default-avt.png"}
              width={36}
              height={36}
              alt="user image"
              className="rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52" align="end">
            <DropdownMenuLabel className="flex flex-col">
              <span>{user?.fullName}</span>
              <span className="text-sm font-normal mt-0.5">
                {user?.emailAddresses[0]?.emailAddress}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        //User is not logged in
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="cursor-pointer rounded-2xl py-5 shadow-[0px_2px_4px_rgba(0,0,0,0.12),0px_8px_12px_rgba(0,0,0,0.08),0px_8px_16px_rgba(0,0,0,0.08)]"
            >
              Login
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[350px] rounded-2xl">
            <DialogHeader>
              <DialogTitle className="flex justify-center">Login</DialogTitle>
              <DialogDescription className="flex flex-col items-center justify-center text-center">
                <span className="mb-2">
                  Sign in for more fun experiences. 🤪
                </span>
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
      )}
    </div>
  );
};

export default UserLogin;
