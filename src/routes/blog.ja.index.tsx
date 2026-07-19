import { createFileRoute } from "@tanstack/react-router";
import { postsByLang, SITE_URL } from "@/lib/blog-posts";
import { BLOG_I18N } from "@/lib/i18n";
import { BlogIndex } from "./blog.index";

export const Route = createFileRoute("/blog/ja/")({
  component: BlogIndexJA,
  head: () => {
    const t = BLOG_I18N.ja;
    return {
      meta: [
        { title: t.metaTitle },
        { name: "description", content: t.metaDescription },
        { property: "og:title", content: t.metaTitle },
        { property: "og:description", content: t.metaDescription },
        { property: "og:url", content: `${SITE_URL}/blog/ja` },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ja_JP" },
      ],
      links: [
        { rel: "canonical", href: `${SITE_URL}/blog/ja` },
        { rel: "alternate", hrefLang: "sk", href: `${SITE_URL}/blog` },
        { rel: "alternate", hrefLang: "en", href: `${SITE_URL}/blog/en` },
        { rel: "alternate", hrefLang: "ja", href: `${SITE_URL}/blog/ja` },
      ],
    };
  },
});

function BlogIndexJA() {
  return <BlogIndex lang="ja" posts={postsByLang("ja")} />;
}
