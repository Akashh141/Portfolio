import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { createClient } from "@/prismicio";
import ContentList from "./ContentList";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/**
 * Props for `BlogPostIndex`.
 */
export type BlogPostIndexProps =
  SliceComponentProps<Content.BlogPostIndexSlice>;

/**
 * Component for "BlogPostIndex" Slices.
 */
const BlogPostIndex = async ({
  slice,
}: BlogPostIndexProps): Promise<JSX.Element> => {
  const client = createClient();
  const projects = await client.getAllByType("project");

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading size="xl" className="mb-8">
        {slice.primary.heading}
      </Heading>
      {isFilled.richText(slice.primary.description) && (
        <div className="prose prose-xl prose-invert mb-10">
          <PrismicRichText field={slice.primary.description} />
        </div>
      )}
      <ContentList
        items={projects}
        contentType={slice.primary.content_type} // Assuming contentType is available
        viewMoreText={slice.primary.view_more_text}
        fallbackItemImage={slice.primary.fallback_item_image}
      />
    </Bounded>
  );
};

export default BlogPostIndex;
