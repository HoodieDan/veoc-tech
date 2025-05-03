import React, { useState } from 'react';
import BlogPreview from '../components/BlogPreview';
import { useArticles } from '../api/hooks';

// Define the Article interface based on the actual response structure
interface Article {
  _id: string;
  title: string;
  author: string;
  tags: string;
  coverImage: string;
  content: Array<{
    type: string;
    paragraphTitle?: string;
    paragraphText?: string;
    imageFile?: string;
  }>;
  status: string;
  createdAt: string;
  updatedAt: string;
  date: string;
}

// Define the expected API response structure
interface ArticlesResponse {
  success: boolean;
  articles: Article[];
}

const Blog: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [activeTag, setActiveTag] = useState<string | null>(null);

    // Type assertion for the hook return type
    const { data: articlesData, isLoading, error } = useArticles("published") as {
        data: ArticlesResponse | undefined;
        isLoading: boolean;
        error: Error | null;
    };

    // Define return type for the processed articles sections
    interface SectionData {
        sectionName: string;
        tags: string[];
        posts: Array<{
            id: string;
            image: string;
            title: string;
            previewText: string;
            category: string;
            date: string;
        }>;
    }

    const processArticles = (): SectionData[] => {
        if (!articlesData?.articles) return [];

        // Extract all unique tags from all articles
        const allTags = [...new Set(articlesData.articles.flatMap((article: Article) =>
            article.tags.split(',').map(tag => tag.trim())
        ))];

        // Sort articles by creation date (newest first)
        const sortedArticles = [...articlesData.articles].sort(
            (a: Article, b: Article) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        
        // Recent posts are just the newest ones
        const recentPosts = sortedArticles.slice(0, 4);

        // For featured posts, either use a 'featured' tag or select a subset
        const featuredPosts = sortedArticles
            .filter((article: Article) => 
                article.tags.toLowerCase().includes('featured') || 
                Math.random() > 0.5 // Example condition for demo
            )
            .slice(0, 8);

        return [
            {
                sectionName: 'RECENT POSTS',
                tags: allTags.slice(0, 5), // Show the first 5 tags
                posts: recentPosts.map((article: Article) => ({
                    id: article._id,
                    image: article.coverImage,
                    title: article.title,
                    previewText: getPreviewText(article),
                    category: article.tags.split(',')[0].trim(),
                    date: new Date(article.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    }),
                })),
            },
            {
                sectionName: 'FEATURED BLOGS',
                tags: allTags.slice(0, 5),
                posts: featuredPosts.map((article: Article) => ({
                    id: article._id,
                    image: article.coverImage,
                    title: article.title,
                    previewText: getPreviewText(article),
                    category: article.tags.split(',')[0].trim(),
                    date: new Date(article.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    }),
                })),
            }
        ];
    };

    // Helper function to safely extract preview text from an article
    const getPreviewText = (article: Article): string => {
        if (!article.content || article.content.length === 0) {
            return 'No preview available...';
        }
        
        const paragraphContent = article.content.find(item => 
            item.type === 'paragraph' && item.paragraphText
        );
        
        if (paragraphContent && paragraphContent.paragraphText) {
            return paragraphContent.paragraphText.substring(0, 150) + '...';
        }
        
        return 'No preview available...';
    };

    const filterPosts = (previews: SectionData[]): SectionData[] => {
        if (!searchTerm && !activeTag) return previews;

        return previews.map(preview => ({
            ...preview,
            posts: preview.posts.filter((post) => {
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
        Error loading blogs: {error instanceof Error ? error.message : String(error)}
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
                                    {preview.tags.map((tag: string, tagIndex: number) => (
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
                                    preview.posts.map((post, index: number) => (
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