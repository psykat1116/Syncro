"use client";
import React, { ElementRef, useRef, useState } from "react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { SearchIcon, X } from "lucide-react";
import { useEventListener } from "usehooks-ts";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Search = () => {
  const buttonRef = useRef<ElementRef<"button">>(null);
  const router = useRouter();
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );
    router.push(url);
  };

  const onKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      buttonRef.current?.click();
    }
  };

  useEventListener("keydown", onKeyPress);

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full lg:w-[400px] flex items-center"
    >
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
        className="rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
      />
      {value && (
        <X
          className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          onClick={() => setValue("")}
        />
      )}
      <Button
        type="submit"
        size="sm"
        variant="secondary"
        className="rounded-l-none"
        ref={buttonRef}
      >
        <SearchIcon className="h-5 w-5 text-muted-foreground" />
      </Button>
    </form>
  );
};

export default Search;
