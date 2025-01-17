interface YoutubeTrackerClientInterface {
  fetchTrackedVideos(): Promise<string[]>;
  trackVideo(videoId: string): Promise<void>;
}

class YoutubeTrackerClient implements YoutubeTrackerClientInterface {
  async fetchTrackedVideos(): Promise<string[]> {
    const response = await fetch(
      "https://api.trackervideos.com/tracked-videos"
    );
    return response.json();
  }

  async trackVideo(videoId: string): Promise<void> {
    // Call the API to track the video
    const response = await fetch(
      `https://api.trackervideos.com/track/${videoId}`
    );
  }
}

const client: YoutubeTrackerClientInterface = new YoutubeTrackerClient();
client.trackVideo("1234");
client.fetchTrackedVideos().then((videos) => {
  console.log(videos);
});

class YoutubeTrackerClientMemoryOnly implements YoutubeTrackerClientInterface {
  _trackedVideos: string[] = [];

  async fetchTrackedVideos(): Promise<string[]> {
    const promise = new Promise<string[]>((resolve, reject) => {
      resolve(this._trackedVideos);
    });
    return promise;
  }

  async trackVideo(videoId: string): Promise<void> {
    this._trackedVideos.push(videoId);
  }
}

const clientMemoryOnly = new YoutubeTrackerClientMemoryOnly();
clientMemoryOnly.trackVideo("1234");
clientMemoryOnly.fetchTrackedVideos().then((videos) => {
  console.log(videos);
});

class SomeObject {
  constructor(private _client: YoutubeTrackerClientInterface) {}

  async doSomething() {
    const videos = await this._client.fetchTrackedVideos();
    console.log(videos);
  }
}

const someObject = new SomeObject(clientMemoryOnly);
someObject.doSomething();
