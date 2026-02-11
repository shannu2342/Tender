import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/siteContent';

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
    const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

    return (
        <div className="page">
            <div className="container page__narrow">
                <article className="legal-card prose">
                    <div className="chip-row">
                        <span className="chip chip--sky">{post.category}</span>
                        <span className="chip">{post.readTime}</span>
                    </div>
                    <h1 className="page__title mt-12">{post.title}</h1>
                    <p className="page__lead">{post.excerpt}</p>
                    <img src={post.cover} alt={post.title} className="media-cover media-cover--md mt-18 mb-18" />

                    <h2>Article</h2>
                    {post.content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}

                    <h2>Tags</h2>
                    <div className="chip-row">
                        {post.tags.map((tag) => (
                            <span key={tag} className="chip">{tag}</span>
                        ))}
                    </div>
                </article>

                <section className="page page--no-bottom">
                    <h2 className="section-title">Related Articles</h2>
                    <div className="grid gap-8 md:grid-cols-2">
                        {related.map((item) => (
                            <article key={item.slug} className="card">
                                <img src={item.cover} alt={item.title} className="media-cover media-cover--sm" />
                                <div className="card-body">
                                    <h3 className="section-title title-sm">{item.title}</h3>
                                    <p className="section-subtitle">{item.excerpt}</p>
                                    <div className="cta-row">
                                        <Link className="btn btn-secondary" to={`/blog/${item.slug}`}>Read</Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BlogDetail;
