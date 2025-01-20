"use server";

export async function search(prevState: any, formData: FormData) {
  const query = formData.get("search");
  if (query) {
    return getVideos(query);
  }
  return [];
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
