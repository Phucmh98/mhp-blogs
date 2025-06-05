"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import SearchInput from "./search-input";
import Upload from "./upload";
import DetailImage from "./detail-image";

const ContainerImages = () => {
  const memes = useQuery(api.galeryMeme.galery.getAllMemes);
  if (!memes) return <div>Đang tải...</div>;

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-5">
        <SearchInput />
        <Upload />
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-4">
        {memes.map((meme) => (
          <DetailImage key={meme._id} src={{...meme}}      />
        ))}
      </div>
      {/* {memes.map((meme) => (
        <div key={meme._id}>
          <h3>{meme.name}</h3>
          <p>Email: {meme.email}</p>
          <p>Ngày: {meme.createdAt}</p>
          <img src={meme.url} alt="meme" width="300" />
        </div>
      ))} */}
    </div>
  );
};

export default ContainerImages;
