"use server";

export async function Search(prevState: any, formData: FormData) {
  const data = {
    q: formData.get("search"),
  };
  if (data.q) {
    return getVideos(data.q);
  }
  return {};
}

export async function getVideos(q: FormDataEntryValue) {
  const youtubeApiKey = process.env.YOUTUBE_API_KEY;
  const queryString = q ? `&q=${encodeURIComponent(q)}` : "";

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${youtubeApiKey}&part=snippet&maxResults=10${queryString}`
  );

  const repo: { items: Video[] } = await res.json();
  return repo.items;
}
