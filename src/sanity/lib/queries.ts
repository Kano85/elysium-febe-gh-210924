// queries.ts
import groq from 'groq';

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)]{
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    body
  }
`;
