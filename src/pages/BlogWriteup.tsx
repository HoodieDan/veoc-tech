import React from 'react';
import { useParams } from 'react-router-dom';
import { useArticle } from '../api/hooks';
import blogImage from '../assets/images/pngs/blog-image.png';

const BlogWriteUp: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useArticle(id!);

  if (isLoading) return <div
    className="d-flex align-items-center justify-content-center text-center"
    style={{ height: 'calc(100dvh - 100px)' }}
  >Loading Blog...</div>;
  if (error) return <div
    className="d-flex align-items-center justify-content-center text-center"
    style={{ height: 'calc(100dvh - 100px)' }}
  >Error loading Blog: {error.message}</div>;

  return (
    <div className='blog__writeup'>
      <section className='hero'>
        <div className="container py-5">
          <div className="d-flex flex-wrap gap-3">
            {data?.article?.tags && data?.article.tags.split(',').map((tag: any, index: any) => (
              <div key={index} className="pill px-5 py-3">
                <p className="">{tag.trim()}</p>
              </div>
            ))}
          </div>

          <h1 className="my-3 w-100">
            {data?.article?.title || 'The Power of Design'}
          </h1>

          <div className="d-flex gap-3">
            <p><span className="text-gray">Written By:</span> {data?.article?.author || 'Jumai Idowu'}</p>
            <p><span className="text-gray">Updated On:</span> {data?.article?.updatedAt ? new Date(data?.article.updatedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'December 13, 2023'}</p>
          </div>

          <img src={data?.article?.coverImage || blogImage} alt="blog image" className="img-fluid my-4" />

          <div className="writeup row">
            <div className="col-lg-4 col-md-4 mb-4 text-gray">
              <p className='mb-2'>CONTENT</p>
              {data?.article?.content && data?.article.content.map((item: any, index: any) => (
                item.type === 'paragraph' && (
                  <p key={index} className="mb-1">{index + 1}. {item.paragraphTitle || ''}</p>
                )
              ))}
            </div>

            <div className="col-lg-8 col-md-8">
              {data?.article?.content && data?.article.content.map((item: any, index: any) => (
                item.type === 'paragraph' && (
                  <div key={index}>
                    <h6 className='mb-2'>{item.paragraphTitle || ''}</h6>
                    <p>{item.paragraphText || ''}</p>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogWriteUp;
