import { createFileRoute, notFound } from "@tanstack/react-router";
import { findPost } from "@/lib/blog-posts";
import { NotFound, PostView, postHead } from "./blog.$slug";

export const Route = createFileRoute("/blog/en/$slug")({
  loader: ({ params }) => {
    const post = findPost("en", params.slug);
    if (!post) throw notFound();
    return post;
  },
  component: ENPost,
  head: ({ loaderData }) => (loaderData ? postHead(loaderData) : {}),
  notFoundComponent: () => <NotFound lang="en" />,
});

function ENPost() {
  const post = Route.useLoaderData();
  return <PostView post={post} />;
}
