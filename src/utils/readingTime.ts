export function getReadingTime(content: string): string {
  if (!content) return '1 phút đọc';
  const clean = content.replace(/<\/?[^>]+(>|$)/g, '').replace(/[#*`~_\[\]()]/g, '');
  const words = clean.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} phút đọc`;
}
