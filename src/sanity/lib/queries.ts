// src/sanity/lib/queries.ts

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
        url
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
        url
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
    },
    categories[]->{
      title
    }
  }
`;

// Alias if necessary
export const POSTS_QUERY = ALL_POSTS_QUERY;
