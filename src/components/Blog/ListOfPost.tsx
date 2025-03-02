//src/components/Blog/ListOfPost.tsx
'use client';

import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import SinglePost from './SinglePost';

import { POSTS_QUERYResult } from '@/sanity/types';

interface ListOfPostProps {
  posts: POSTS_QUERYResult[];
}

const ListOfPost: React.FC<ListOfPostProps> = ({ posts = [] }) => {
  if (posts.length === 0) {
    return <p>No posts available at the moment. Please check back later!</p>;
  }

  return (
    <section
      id="listofposts"
      className="bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Nuestras últimas publicaciones"
          paragraph="Explora los artículos más recientes de nuestro blog, donde compartimos estrategias, noticias y consejos sobre consultoría fiscal, empresarial y más."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {posts.map((post) => (
            <div key={post._id} className="w-full">
              <SinglePost listofposts={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListOfPost;
