import { Video } from "@/app/main/page";

interface VideoListProps {
  videos: Video[];
}

export default function VideoList({ videos }: VideoListProps) {
  return (
    <div>
      <h1>Video List</h1>
      <ul>
        {videos.length > 0
          ? videos.map((video) => <li key={video.id.videoId}>{video.snippet.title}</li>)
          : "No videos found"}
      </ul>
    </div>
  );
}
