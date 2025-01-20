"use client";
import VideoList from "@/components/video-list";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import { useFormState } from "react-dom";
import { getVideos, Search } from "./action";
import { useState, useRef } from "react";

export type Video = {
  id: { videoId: string };
  snippet: { title: string };
};

export default function Page() {
  const [state, dispatch] = useFormState(Search, null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [search, setSearch] = useState<string>("");
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(async () => {
      if (search) {
        const videosData = await getVideos(search);
        setVideos(videosData);
      } else {
        setVideos([]);
      }
    }, 300);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch} className="flex flex-col gap-3">
          <FormInput
            name="search"
            type="search"
            placeholder="Search here..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required={false}
          />
          <FormButton text="Search" />
        </form>
      </div>
      <div>
        <VideoList videos={videos} />
      </div>
    </div>
  );
}
