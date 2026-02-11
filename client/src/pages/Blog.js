import { Link } from 'react-router-dom';
import { blogPosts } from '../data/siteContent';

const Blog = () => {
    return (
        <div className="page">
            <div className="container">
                <header className="page__header page__narrow">
                    <h1 className="page__title">Insights and Updates</h1>
                    <p className="page__lead">
                        Practical guidance on GeM operations, bid management, and enterprise procurement delivery.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <article key={post.slug} className="card">
                            <img src={post.cover} alt={post.title} className="media-cover media-cover--md" />
                            <div className="card-body">
                                <div className="chip-row">
                                    <span className="chip chip--sky">{post.category}</span>
                                    <span className="chip">{post.readTime}</span>
                                </div>
                                <h2 className="section-title title-md mt-12">{post.title}</h2>
                                <p className="section-subtitle">{post.excerpt}</p>
                                <div className="notice mt-12">
                                    <strong>{post.author}</strong>
                                    <p>{new Date(post.date).toLocaleDateString()}</p>
                                </div>
                                <div className="cta-row">
                                    <Link to={`/blog/${post.slug}`} className="btn btn-secondary">Read Article</Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
