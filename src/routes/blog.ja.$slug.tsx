import { createFileRoute, notFound } from "@tanstack/react-router";
import { findPost } from "@/lib/blog-posts";
import { NotFound, PostView, postHead } from "./blog.$slug";

export const Route = createFileRoute("/blog/ja/$slug")({
  loader: ({ params }) => {
    const post = findPost("ja", params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: JAPost,
  head: ({ loaderData }) => (loaderData ? postHead(loaderData) : {}),
  notFoundComponent: () => <NotFound lang="ja" />,
});

function JAPost() {
  return <PostView post={Route.useLoaderData()} />;
}
