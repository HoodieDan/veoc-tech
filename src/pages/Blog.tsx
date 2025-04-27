import React, { useState } from 'react';
import BlogPreview from '../components/BlogPreview';
import { Article } from '../api/services';
import { useArticles } from '../api/hooks';

const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const { data: articlesData, isLoading, error } = useArticles("published");

    const processArticles = (): any[] => {
        if (!articlesData?.articles) return [];

        const recentPosts = articlesData.articles
            .sort((a: Article, b: Article) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 4);

        const featuredPosts = articlesData.articles
            .filter((article: Article) => article.tags.includes('featured') || Math.random() > 0.5) // Example condition
            .slice(0, 8);

        const allTags = [...new Set(articlesData.articles.flatMap((article: Article) =>
            article.tags.split(',').map(tag => tag.trim())
        ))];

        return [
            {
                sectionName: 'RECENT POSTS',
                tags: allTags.slice(0, 2),
                posts: recentPosts.map((article: Article): any => ({
                    id: article._id,
                    image: article.coverImage,
                    title: article.title,
                    previewText: article.content.find(item => item.type === 'paragraph')?.paragraphText?.substring(0, 150) + '...' || '',
                    category: article.tags.split(',')[0],
                    date: new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                })),
            },
            {
                sectionName: 'FEATURED BLOGS',
                tags: allTags.slice(0, 2),
                posts: featuredPosts.map((article: Article): any => ({
                    id: article._id,
                    image: article.coverImage,
                    title: article.title,
                    previewText: article.content.find(item => item.type === 'paragraph')?.paragraphText?.substring(0, 150) + '...' || '',
                    category: article.tags.split(',')[0],
                    date: new Date(article.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                })),
            }
        ];
    };

    const filterPosts = (previews: any[]): any[] => {
        if (!searchTerm && !activeTag) return previews;

        return previews.map(preview => ({
            ...preview,
            posts: preview.posts.filter((post: any) => {
                const matchesSearch = !searchTerm ||
                    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    post.category.toLowerCase().includes(searchTerm.toLowerCase());

                const matchesTag = !activeTag ||
                    post.category.toLowerCase() === activeTag.toLowerCase();

                return matchesSearch && matchesTag;
            })
        }));
    };

    const previews = processArticles();
    const filteredPreviews = filterPosts(previews);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleTagClick = (tag: string) => {
        setActiveTag(activeTag === tag ? null : tag);
    };

    if (isLoading) return <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: 'calc(100dvh - 100px)' }}
    >
        Loading blogs...
    </div>;
    if (error) return <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ height: 'calc(100dvh - 100px)' }}
    >
        Error loading blogs: {error.message}
    </div>;

    return (
        <div className='blog__page'>
            <section className='search'>
                <div className="container p-lg-5 text-center">
                    <h1>We do not deliver results only, we also write about what we do</h1>
                    <form onSubmit={handleSearch} className="d-flex search__bar align-items-center mt-3">
                        <input
                            type="text"
                            placeholder='Search by name or category e.g AI'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit"><small>Search</small></button>
                    </form>
                </div>
            </section>

            <section className="py-5 blog__previews">
                <div className="container">
                    {filteredPreviews.map((preview, sectionIndex) => (
                        <React.Fragment key={`section-${sectionIndex}`}>
                            <div className="header d-flex justify-content-between align-items-center flex-wrap mb-3 mt-5">
                                <h5 className='me-3 py-3'>{preview.sectionName}</h5>
                                <div className="d-flex flex-wrap py-lg-0 py-md-0 py-3">
                                    {preview.tags.map((tag: any, tagIndex: any) => (
                                        <div
                                            key={`tag-${tagIndex}`}
                                            className={`pill ${activeTag === tag ? 'active' : ''}`}
                                            onClick={() => handleTagClick(tag)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="row">
                                {preview.posts.length > 0 ? (
                                    preview.posts.map((post: any, index: any) => (
                                        <BlogPreview key={`post-${post.id}-${index}`} post={post} index={index} />
                                    ))
                                ) : (
                                    <div className="col-12 text-center py-4">
                                        No posts match your search criteria.
                                    </div>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Blog;