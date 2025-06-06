"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import SearchInput from "./search-input";
import Upload from "./upload";
import DetailImage from "./detail-image";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo, useState } from "react";

const ContainerImages = () => {
  const memes = useQuery(api.galeryMeme.galery.getAllMemes);

  const [search, setSearch] = useState<string>("");

  const filteredMemes = useMemo(() => {
    if (!memes) return [];
    if (!search.trim()) return memes;
    return memes.filter((meme) =>
      meme.nameImg.toLowerCase().includes(search.toLowerCase())
    );
  }, [memes, search]);

  if (!memes)
    return (
      <>
        <Skeleton className="h-9" />
        <div className="columns-1 md:columns-4 lg:columns-6 gap-4 space-y-4 mt-4 min-h-[250px]">
              <Skeleton className="w-full h-[250px] rounded-lg" />

         
        </div>
      </>
    );

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-5">
        <SearchInput value={search} onChange={setSearch} />
        <Upload />
      </div>

      {filteredMemes.length === 0 ? (
        <div className="flex text-xl text-gray-400 w-full justify-center items-center min-h-[250px]">
          No memes found
        </div>
      ) : (
        <div className="columns-2 md:columns-4 lg:columns-5 gap-3 space-y-5 my-8 min-h-[250px]">
          {filteredMemes.map((meme) => (
            <DetailImage key={meme._id} src={{ ...meme }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ContainerImages;
