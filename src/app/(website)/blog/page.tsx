'use client';

import { useTranslation } from 'react-i18next';
import { getFullLanguageName } from '@/lib/utils';
import useFetchPosts from '@/hooks/useFetchPosts';
import Breadcrumb from '@/components/Common/Breadcrumb';
import Footer from '@/components/Footer';
import CardBlog from '@/components/Common/CardBlog';

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const langFull = getFullLanguageName(i18n.language || 'en');
  const { posts, isLoading, error } = useFetchPosts(langFull);

  if (isLoading) return <div className="py-32 text-center">Loading…</div>;
  if (error)
    return <div className="py-32 text-center text-red-500">{error}</div>;

  return (
    <>
      <Breadcrumb
        pageName={t('Insights from Our Specialists')}
        description={t(
          'Discover personalized investment strategies to achieve your financial goals'
        )}
      />

      {/* inner wrapper remains; outer background+container handled by layout */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {posts
            .filter((post) => post.slug?.current)
            .map((post) => (
              <CardBlog key={post._id} post={post} />
            ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
