"use client";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useClerk } from "@clerk/shared/react/index";
import { LogOut } from "lucide-react";
import DialogUserLogin from "@/components/commons/dialog/user-login";

const UserLogin = () => {
  const { signOut, user } = useClerk();

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
        <DialogUserLogin />
      )}
    </div>
  );
};

export default UserLogin;
