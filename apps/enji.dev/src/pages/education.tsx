import { getSortedPosts } from '@/lib/posts';

import BlogContents from '@/contents/blog';
import HeaderImage from '@/contents/blog/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { BlogContentsProps } from '@/contents/blog';
import type { GetStaticProps } from 'next';

type BlogProps = {
  posts: BlogContentsProps['posts'];
};

function Education({ posts }: BlogProps) {
  return (
    <Page
      frontMatter={{
        title: 'Education History',
        description: 'I have selected a variety of courses and studies that align with my personal and professional interests and goals. These courses cover various areas of knowledge, providing a solid and specialized foundation in each field.\n',
      }}
      headerImage={<HeaderImage />}
    >
      <BlogContents posts={posts} />

    </Page>
  );
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const allPostsData = getSortedPosts();

  return {
    props: {
      posts: allPostsData,
    },
  };
};

export default Education;
