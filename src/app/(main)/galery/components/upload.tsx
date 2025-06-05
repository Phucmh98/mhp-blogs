"use client";
import DialogUserLogin from "@/components/commons/dialog/user-login";
import { useClerk } from "@clerk/nextjs";
import { CldUploadButton } from "next-cloudinary";
import { useState } from "react";
const Upload = () => {
  const { user } = useClerk();
  const [isShowDialogLogin, setIsShowDialogLogin] = useState(false);

  const handleUpload = (result: any) => {
    console.log("Upload result:", result);
  };
  const handleCheckLogin = () => {
    if (!user) {
      setIsShowDialogLogin(true);
    }
    
  };
  return (
    <>
      <CldUploadButton
        onClick={handleCheckLogin}
        className="border rounded-lg px-4 h-[36px] cursor-pointer bg-amber-600 hover:bg-amber-400 transition-colors duration-200"
        uploadPreset="mhp-blog-meme"
        options={{ maxFiles: 1 }}
        // onUpload={handleUpload}
        onSuccess={handleUpload}
      >
        Upload your meme
      </CldUploadButton>
      {/* {isShowDialogLogin && (
        // <DialogUserLogin />
      )} */}
    </>
  );
};

export default Upload;
