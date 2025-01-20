import VideoList from "@/components/video-list";

export type Video = {
  id: { videoId: string };
  snippet: { title: string };
};

export default async function Page() {
  const youtubeApiKey = process.env.YOUTUBE_API_KEY;
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&part=snippet&maxResults=10`
  );
  const repo: { items: Video[] } = await res.json();
  const videos = repo.items;
  return (
    <main>
      <VideoList videos={videos} />
      ;)
    </main>
  );
}
