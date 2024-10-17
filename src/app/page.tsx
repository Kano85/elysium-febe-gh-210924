'use client';

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { client } from '../sanity/lib/client';
import { POSTS_QUERY } from '../sanity/lib/queries';
import { POSTS_QUERYResult } from '../sanity/types';
import imageUrlBuilder from '@sanity/image-url';

// Configure the URL builder to create image URLs for Sanity images
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<POSTS_QUERYResult[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts: POSTS_QUERYResult[] = await client.fetch(POSTS_QUERY);
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>My Blog</title>
        <meta
          name="description"
          content="A collection of interesting blog posts"
        />
      </Head>

      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No posts available at the moment. Please check back later!</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            <h2>{post.title ?? 'Untitled Post'}</h2>
            <p>{post.excerpt ?? 'No excerpt available.'}</p>
            {post.mainImage?.asset && (
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt ?? 'Post Image'}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
