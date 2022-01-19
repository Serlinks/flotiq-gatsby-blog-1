import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import BlogPostHeader from '../components/blog-post/BlogPostHeader';
import BlogPostImage from '../components/blog-post/BlogPostImage';
import BlogPostBlockquote from '../components/blog-post/BlogPostBlockquote';

const BlogPostTemplate = ({ data, pageContext }) => {
    const post = data.blogpost;
    return (
        <Layout additionalClass={['bg-white']}>
            <div className="max-w-7xl mx-auto mt-20 pb-4 rounded-2xl bg-light-gray overflow-hidden">
                <BlogPostImage headerImage={post.headerImage} title={post.title} />
                <BlogPostHeader
                    headingLevel="h1"
                    headerTitle={post.title}
                    additionalClass={['text-center py-10']}
                />
                <BlogPostHeader headingLevel="h1" headerTitle="# Header 1" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h1" headerTitle="# Header 1" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h2" headerTitle="# Header 2" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h3" headerTitle="# Header 3" additionalClass={['py-5']} />
                <BlogPostHeader headingLevel="h4" headerTitle="cytat" additionalClass={['py-5']} />
                <BlogPostBlockquote
                    additionalClass={['my-5']}
                    blockquoteContent="If you’re a beginning website owner you might be wondering what a
                CMS is and if you need one. This article will look at some valid reasons to invest in
                a CMS, but also will try to shed some light on the caveats, so read on."
                    blockquoteAuthor="flotiq"
                />
            </div>
        </Layout>
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        blogpost( slug: { eq: $slug } ) {
            id
            title
            content
            headerImage {
                extension
                url
                width
                height
                localFile {
                    publicURL
                    childImageSharp {
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;
