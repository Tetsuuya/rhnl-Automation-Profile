import type { WorkItem } from "@/data/work";
import FlowPreview from "./FlowPreview";

// `full` renders playable media for the viewer; otherwise a static thumbnail for cards.
export default function Media({ item, full = false }: { item: WorkItem; full?: boolean }) {
  const m = item.media;

  if (!m) return <FlowPreview nodes={item.nodes} />;

  if (m.type === "image") {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={m.src} alt={item.title} className={`h-full w-full ${full ? "object-contain" : "object-cover"}`} />;
  }

  if (m.type === "video") {
    return full ? (
      <video src={m.src} poster={m.poster} controls autoPlay muted playsInline className="h-full w-full bg-black object-contain" />
    ) : (
      <video src={m.src} poster={m.poster} muted loop playsInline autoPlay className="h-full w-full object-cover" />
    );
  }

  return full ? (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${m.id}?autoplay=1`}
      title={item.title}
      allow="autoplay; encrypted-media; fullscreen"
      allowFullScreen
      className="h-full w-full"
    />
  ) : (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={`https://i.ytimg.com/vi/${m.id}/hqdefault.jpg`} alt={item.title} className="h-full w-full object-cover" />
  );
}
