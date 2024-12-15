import { YouTube } from "@/components/ui/youtube";

interface VideoBlockContent {
  url: string;
  caption?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  controls?: boolean;
}

interface VideoBlockProps {
  block: {
    content: VideoBlockContent;
  };
}

function getYouTubeId(url: string): string | null {
  const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
}

export default function VideoBlock({ block }: VideoBlockProps) {
  const { url, caption } = block.content;
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return null;
  }

  return (
    <div className="my-8">
      <YouTube videoId={videoId} />
      {caption && (
        <p className="mt-2 text-sm text-muted-foreground text-center">
          {caption}
        </p>
      )}
    </div>
  );
} 