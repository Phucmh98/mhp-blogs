"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { useRef } from "react";

const SearchInput = ({ value, onChange }: { value: string; onChange: (v: string) => void; }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const handleClear = () => {
    onChange("");
    inputRef.current?.blur();
  };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   inputRef.current?.blur();
  // };
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-full">
        <Input
          value={value}
          onChange={handleChange}
          ref={inputRef}
          placeholder="Search"
          className="md:text-base placeholder:text-neutral-600 px-14 w-full  focus-visible:shadow-[0_1px_1px_0_rgba(65,69,73,.3),0_1px_3px_1px_rgba(65,69,73,.15)] bg-[#F0F4F8] rounded-lg h-[36px] focus-visible:ring-0 focus:bg-white"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute left-3 top-1/2 -translate-y-1/2 [&_svg]:size-4 rounded-full"
        >
          <SearchIcon />
        </Button>
        {value && (
          <Button
            onClick={handleClear}
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-3 top-1/2 -translate-y-1/2 [&_svg]:size-4 rounded-full"
          >
            <XIcon />
          </Button>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
