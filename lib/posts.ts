import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => ({ params: { slug: fileName.replace(/\.md$/, "") } }));
}

export function getSortedPostsMetadata(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        author: data.author ?? "DONOFR.IO",
        tags: data.tags ?? [],
      } as PostMeta;
    });

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    author: data.author ?? "DONOFR.IO",
    tags: data.tags ?? [],
    contentHtml,
  };
}
