"use client";
import VideoList from "@/components/video-list";
import FormInput from "@/components/form-input";
import FormButton from "@/components/form-button";
import { useFormState } from "react-dom";
import { search } from "./action";
import { useState, useRef, useEffect } from "react";

export type Video = {
  id: { videoId: string };
  snippet: { title: string };
};

export default function Page() {
  const [state, dispatch] = useFormState(search, []);
  const [videos, setVideos] = useState<Video[]>([]);
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    debounceTimeoutRef.current = setTimeout(() => {
      if (state && Array.isArray(state)) {
        setVideos(state);
      } else return;
    }, 300);
  }, [state]);

  return (
    <div>
      <div>
        <form action={dispatch} className="flex flex-col gap-3">
          <FormInput name="search" type="search" placeholder="Search here..." required={false} />
          <FormButton text="Search" />
        </form>
      </div>
      <div>
        <VideoList videos={videos} />
      </div>
    </div>
  );
}
