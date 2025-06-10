import { useMutation } from "convex/react";
import { DownloadIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { api } from "../../../../../convex/_generated/api";

interface IDetailImageProps {
  url: string;
  nameImg?: string;
  type?: string;
  thumbnail_url?: string;
  idImg?: string;
}

const DetailImage = ({
  src,
  role,
}: {
  src: IDetailImageProps;
  role?: string;

}) => {
  const mutationRemove = useMutation(api.galeryMeme.galery.removeMemeDirects);

  const handleRemove = async () => {
    mutationRemove({ idImgs: [src.idImg || ""] })
      .then(() => {
        toast.success("Image removed successfully!");
      })
      .catch(() => {
        toast.error("Failed to remove image!");
      });
  };

  return (
    <>
      {src.type === "image" ? (
        <ImageView src={src} role={role} removeFunc={handleRemove}/>
      ) : (
        <VideoView src={src} role={role}  removeFunc={handleRemove}/>
      )}
    </>
  );
};

export default DetailImage;

const ImageView = ({
  src,
  role,
  removeFunc,
}: {
  src: IDetailImageProps;
  role?: string;
  removeFunc?: () => void;
}) => {
  // Hàm tải ảnh
  const handleDownload = async () => {
    try {
      const response = await fetch(src.url, { mode: "cors" });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = src.nameImg || src.url.split("/").pop() || "meme.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      toast.error("Download failed!");
    }
  };
  return (
    <div className="break-inside-avoid overflow-hidden rounded-xl border mb-4 relative group">
      <Image
        src={src.url}
        alt={src.nameImg || "Meme Image"}
        width={200}
        height={200}
        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay chỉ ở dưới, chiều cao 25% ảnh */}
      <div className="absolute bottom-0 left-0 right-0 h-[40px] transparent group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparentopacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between px-2 text-transparent group-hover:text-gray-300  rounded-b-lg select-none">
        <p className="truncate max-w-[80%] text-sm">{src.nameImg}</p>
        <span className="flex items-center gap-1">
          <DownloadIcon
            className="cursor-pointer size-5"
            onClick={handleDownload}
          />
          {role && role === "admin" && (
            <TrashIcon className="cursor-pointer size-5" onClick={removeFunc} />
          )}
        </span>
      </div>
    </div>
  );
};

const VideoView = ({
  src,
  role,
  removeFunc,
}: {
  src: IDetailImageProps;
  role?: string;
  removeFunc?: () => void;
}) => {
  const cleanUrl = src?.thumbnail_url?.replace(/c_limit,h_\d+,w_\d+\//, "");
  return (
    <div className="group text-gray-700 dark:text-gray-300 ">
      <video
        width="auto"
        height="auto"
        controls
        preload="none"
        poster={cleanUrl}
        className="rounded-lg"
      >
        <source src={src.url} type="video/mp4" />
      </video>
      <div className="flex mx-1 justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="truncate text-sm ">{src.nameImg}</p>
        {role && role === "admin" && (
          <TrashIcon className="cursor-pointer size-5" onClick={removeFunc} />
        )}
      </div>
    </div>
  );
};
