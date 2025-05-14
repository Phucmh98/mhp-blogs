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
  const { signOut, user} = useClerk();

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
        <DropdownMenu >
          <DropdownMenuTrigger asChild className="cursor-pointer" >
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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Login</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[350px]">
            <DialogHeader>
              <DialogTitle className="flex justify-center">Login</DialogTitle>
              <DialogDescription className="flex justify-center">
                Sign in for more fun experiences
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
                Github
              </Button>
              <Button
                onClick={() => {
                  loginWith({ strategy: "oauth_google" });
                }}
                className="w-full"
                variant="outline"
              >
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
