

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: 'Understanding GeM Registration Process',
            excerpt: 'A comprehensive guide to registering your business on the Government e-Marketplace.',
            image: 'https://picsum.photos/seed/blog1/400/200',
            author: 'Admin',
            date: '2023-10-15',
            category: 'GeM Registration',
            readTime: '5 min read'
        },
        {
            id: 2,
            title: 'How to Prepare Winning Bids for Government Tenders',
            excerpt: 'Essential tips and strategies to increase your chances of winning government tenders.',
            image: 'https://picsum.photos/seed/blog2/400/200',
            author: 'Admin',
            date: '2023-10-10',
            category: 'Tender Tips',
            readTime: '8 min read'
        },
        {
            id: 3,
            title: 'Importance of Catalog Management on GeM',
            excerpt: 'Learn how effective catalog management can boost your business on the GeM platform.',
            image: 'https://picsum.photos/seed/blog3/400/200',
            author: 'Admin',
            date: '2023-10-05',
            category: 'Catalog Management',
            readTime: '6 min read'
        },
        {
            id: 4,
            title: 'Latest Changes in Government Procurement Policies',
            excerpt: 'Stay updated with the latest government procurement policies and how they affect your business.',
            image: 'https://picsum.photos/seed/blog4/400/200',
            author: 'Admin',
            date: '2023-09-28',
            category: 'Policy Updates',
            readTime: '7 min read'
        },
        {
            id: 5,
            title: 'MSME Registration Benefits on GeM',
            excerpt: 'Discover the benefits of MSME registration for businesses participating in government tenders.',
            image: 'https://picsum.photos/seed/blog5/400/200',
            author: 'Admin',
            date: '2023-09-20',
            category: 'MSME',
            readTime: '4 min read'
        },
        {
            id: 6,
            title: 'Digital Transformation in Government Procurement',
            excerpt: 'How digital platforms like GeM are revolutionizing government procurement processes.',
            image: 'https://picsum.photos/seed/blog6/400/200',
            author: 'Admin',
            date: '2023-09-15',
            category: 'Digital Transformation',
            readTime: '9 min read'
        }
    ];

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Blog</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Stay updated with the latest news and insights about GeM and government procurement.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <div key={blog.id} className="card" style={{ overflow: 'hidden' }}>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <img
                                src={blog.image}
                                alt={blog.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                        <div style={{ padding: '20px' }}>
                            <div style={{
                                backgroundColor: '#e6f4ff',
                                color: '#3182ce',
                                padding: '5px 10px',
                                borderRadius: '3px',
                                display: 'inline-block',
                                fontSize: '0.8rem',
                                marginBottom: '10px'
                            }}>
                                {blog.category}
                            </div>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#2d3748' }}>
                                <a href={`/blog/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    {blog.title}
                                </a>
                            </h3>
                            <p style={{ color: '#718096', lineHeight: '1.6', marginBottom: '15px', fontSize: '0.9rem' }}>
                                {blog.excerpt}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#718096' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: '5px' }}>👤</span>
                                    <span>{blog.author}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span style={{ marginRight: '5px' }}>🕐</span>
                                    <span>{blog.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Blog;