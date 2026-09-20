/** Extract a YouTube embed URL from any YouTube link format. Returns null for non-YouTube URLs. */
export function getYouTubeEmbed(url: string): string | null {
  const watchM = url.match(/youtube\.com\/watch\?(?:.*&)?v=([^&]+)/);
  if (watchM) return `https://www.youtube.com/embed/${watchM[1]}?rel=0`;
  const shortM = url.match(/youtu\.be\/([^?]+)/);
  if (shortM) return `https://www.youtube.com/embed/${shortM[1]}?rel=0`;
  const listM = url.match(/youtube\.com\/playlist\?(?:.*&)?list=([^&]+)/);
  if (listM) return `https://www.youtube.com/embed/videoseries?list=${listM[1]}&rel=0`;
  if (url.includes('youtube.com/embed/')) return url;
  return null;
}
