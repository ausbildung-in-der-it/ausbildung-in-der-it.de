interface YouTubeProps {
  videoId: string;
}

export function YouTube({ videoId }: YouTubeProps) {
  const provider = 'https://www.youtube-nocookie.com';
  const baseUrl = `${provider}/embed/`;
  const src = `${baseUrl}${videoId}`;

  return (
    <div className="relative w-full aspect-video">
      <iframe
        title="YouTube video player"
        src={src}
        className="absolute inset-0 w-full h-full rounded-lg shadow-md"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
} 