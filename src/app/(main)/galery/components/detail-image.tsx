import { DownloadIcon } from "lucide-react";
import Image from "next/image";

interface IDetailImageProps {
  url: string;
  name?: string;
}

const DetailImage = ({ src }: { src: IDetailImageProps }) => {
  return (
    <div className="break-inside-avoid overflow-hidden rounded-xl mb-4 relative group">
      <Image
        src={src.url}
        alt={src.name || "Meme Image"}
        width={200}
        height={200}
        className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay chỉ ở dưới, chiều cao 25% ảnh */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[40px] transparent group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparentopacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between px-4 text-transparent group-hover:text-gray-300  rounded-b-lg select-none"
      >
        <p className="truncate max-w-[80%] text-sm">{src.name}</p>
        <DownloadIcon className="cursor-pointer" />
      </div>
    </div>
  );
};

export default DetailImage;
