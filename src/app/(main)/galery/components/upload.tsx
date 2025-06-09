"use client";
import DialogUserLogin from "@/components/commons/dialog/dialog-user-login";
import { Button } from "@/components/ui/button";

import { useClerk } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { CldUploadButton } from "next-cloudinary";
import { api } from "../../../../../convex/_generated/api";
import { toast } from "sonner";
const Upload = () => {
  const { user } = useClerk();
  const mutationUpload = useMutation(api.galeryMeme.galery.uploadMeme);
  const mutationRemove = useMutation(api.galeryMeme.galery.removeMemes);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpload = (result: any) => {
    if (
      result?.info.resource_type === "image" ||
      result?.info.resource_type === "video"
    ) {
      mutationUpload({
        createdAt: new Date().toISOString(),
        email: user?.emailAddresses[0]?.emailAddress || "",
        idImg: result?.info.public_id || "",
        url: result?.info.secure_url || "",
        type: result?.info.resource_type || "",
        name: user?.fullName || "Anonymous",
        nameImg: result?.info.original_filename || "Untitled",
        thumbnail_url: result?.info.thumbnail_url || "",
      })
        .then(() => {
          toast.success("Upload successful!", {
            description:
              "Upload your meme successfully.\nIt will be reviewed soon.",
          });
        })
        .catch(() => {
          toast.error("Upload failed!", {
            description:
              "There was an error uploading your meme.\nPlease try again later.",
          });
        });
    } else {
      mutationRemove({
        idImgs: [result?.info.public_id || ""],
      }).then(() => {
        toast.error("Upload failed!", {
          description: "Only images and videos are allowed.",
        });
      });

      return;
    }
  };

  return (
    <>
      {!user ? (
        <DialogUserLogin>
          <Button
            variant="outline"
            className="border rounded-lg px-4 h-[36px] text-gray-200 cursor-pointer !bg-amber-600 !hover:bg-amber-400 transition-colors duration-200"
          >
            Upload your meme
          </Button>
        </DialogUserLogin>
      ) : (
        <CldUploadButton
          className="border rounded-lg px-4 h-[36px] text-gray-200 cursor-pointer bg-amber-600 hover:bg-amber-400 transition-colors duration-200"
          uploadPreset="mhp-blog-meme"
          options={{ maxFiles: 1 }}
          onSuccess={handleUpload}
        >
          Upload your meme
        </CldUploadButton>
      )}
    </>
  );
};

export default Upload;
