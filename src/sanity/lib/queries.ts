import groq from 'groq';

export const ALL_POSTS_QUERY = groq`
  *[_type == "post"]{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _ref,
        _type,
        url // Add the url property
      },
      hotspot,
      crop,
      alt,
      _type
    },
    publishedAt,
    excerpt,
    body
  }
`;

export const POST_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    mainImage{
      asset->{
        _ref,
        _type,
        url // Add the url property
      },
      hotspot,
      crop,
      alt,
      _type
    },
    publishedAt,
    excerpt,
    body,
    author->{
      name,
      image
    }
  }
`;

// Ensure that POSTS_QUERY is correctly exported
export const POSTS_QUERY = ALL_POSTS_QUERY;
