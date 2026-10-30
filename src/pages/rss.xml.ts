import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'IT UNIVERSE — Kỹ Thuật Phần Mềm & Vũ Trụ Số',
    description:
      'Kho lưu trữ bài viết công nghệ, kiến trúc web hiện đại với Astro & TypeScript, và các thử nghiệm sáng tạo.',
    site: context.site || 'https://khanh.github.io',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>vi-VN</language>`,
  });
}
