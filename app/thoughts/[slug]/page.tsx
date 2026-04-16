import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((p) => p.params);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} — DONOFR.IO`,
    description: post.excerpt,
  };
}

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  return (
    <main>
      <article className="post-article">
        <Link href="/thoughts" className="back-link">
          &larr; All Thoughts
        </Link>
        <header className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span className="date">{formatDate(post.date)}</span>
            {post.author && <span>By {post.author}</span>}
            {post.tags && post.tags.length > 0 && (
              <div className="post-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">{tag}</span>
                ))}
              </div>
            )}
          </div>
        </header>
        <div
          className="post-body"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  );
}
