
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();

    const blog = {
        id,
        title: 'Understanding GeM Registration Process',
        excerpt: 'A comprehensive guide to registering your business on the Government e-Marketplace.',
        content: `
      <p>The Government e-Marketplace (GeM) is an online platform for government procurement in India. It aims to simplify the process of buying and selling goods and services by government departments.</p>
      
      <h2>Why Register on GeM?</h2>
      <p>Registering on GeM opens up opportunities for businesses to participate in government tenders, which can significantly boost their revenue. The platform provides transparency, efficiency, and cost-effectiveness in procurement processes.</p>
      
      <h2>Who Can Register?</h2>
      <p>Any business entity registered in India, including:</p>
      <ul>
        <li>Proprietorship firms</li>
        <li>Partnership firms</li>
        <li>Private limited companies</li>
        <li>Public sector undertakings</li>
        <li>MSMEs and startups</li>
      </ul>
      
      <h2>Documents Required</h2>
      <p>The registration process requires specific documents to verify your business authenticity. Here's what you need:</p>
      <ul>
        <li>PAN card of the business</li>
        <li>GST registration certificate</li>
        <li>Bank account details</li>
        <li>Company registration certificate</li>
        <li>Address proof of the business</li>
        <li>Identity proof of authorized signatory</li>
      </ul>
      
      <h2>Registration Process</h2>
      <p>The registration process involves several steps. Here's a step-by-step guide:</p>
      
      <h3>Step 1: Create an Account</h3>
      <p>Visit the GeM portal and create an account using your business email id. You will receive an OTP for verification.</p>
      
      <h3>Step 2: Fill Business Details</h3>
      <p>Provide all the necessary details about your business, including legal name, address, PAN, GST number, and bank account information.</p>
      
      <h3>Step 3: Upload Documents</h3>
      <p>Upload the required documents in the specified format. Ensure that all documents are clear and valid.</p>
      
      <h3>Step 4: Verification</h3>
      <p>Your application will be verified by the GeM authorities. This may take 1-3 working days.</p>
      
      <h3>Step 5: Activate Account</h3>
      <p>Once verified, you will receive an email with activation details. Log in and complete your profile to start using the platform.</p>
      
      <h2>Benefits of GeM Registration</h2>
      <p>Registering your business on GeM offers several advantages:</p>
      <ul>
        <li>Access to government tenders</li>
        <li>Transparent and competitive bidding process</li>
        <li>Quick payment processing</li>
        <li>Reduced paperwork and bureaucracy</li>
        <li>Expanded market reach</li>
      </ul>
      
      <h2>How We Can Help</h2>
      <p>Our team of experts can guide you through the entire registration process, ensuring that your application is completed correctly and efficiently. We will help you prepare all the necessary documents and ensure that your business profile is attractive to government buyers.</p>
    `,
        image: 'https://picsum.photos/seed/blog1/800/400',
        author: 'Admin',
        date: '2023-10-15',
        category: 'GeM Registration',
        readTime: '5 min read',
        tags: ['GeM', 'Registration', 'Government Procurement']
    };

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <article style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a202c' }}>
                        {blog.title}
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', color: '#718096', fontSize: '0.9rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '5px' }}>👤</span>
                            <span>{blog.author}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '5px' }}>📅</span>
                            <span>{blog.date}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '5px' }}>🕐</span>
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </div>

                <div style={{ marginBottom: '40px' }}>
                    <img
                        src={blog.image}
                        alt={blog.title}
                        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '40px' }}>
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </div>

                <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', color: '#2d3748' }}>Tags</h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        {blog.tags.map((tag, index) => (
                            <span key={index} style={{
                                backgroundColor: '#f7fafc',
                                color: '#4a5568',
                                padding: '5px 10px',
                                borderRadius: '3px',
                                fontSize: '0.8rem',
                                border: '1px solid #e2e8f0'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '40px' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#2d3748' }}>Related Articles</h3>
                    <div className="grid gap-8 md:grid-cols-2">
                        {[1, 2].map((item) => (
                            <div key={item} className="card" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
                                <div style={{ flex: '0 0 150px' }}>
                                    <img
                                        src={`https://picsum.photos/seed/blog${item + 2}/300/200`}
                                        alt={`Related Blog ${item}`}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                            borderRadius: '5px'
                                        }}
                                    />
                                </div>
                                <div style={{ flex: '1' }}>
                                    <div style={{
                                        backgroundColor: '#e6f4ff',
                                        color: '#3182ce',
                                        padding: '5px 10px',
                                        borderRadius: '3px',
                                        display: 'inline-block',
                                        fontSize: '0.8rem',
                                        marginBottom: '10px'
                                    }}>
                                        {item === 1 ? 'Tender Tips' : 'Catalog Management'}
                                    </div>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '10px', color: '#2d3748' }}>
                                        {item === 1 ? 'How to Prepare Winning Bids' : 'Importance of Catalog Management'}
                                    </h4>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#718096' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ marginRight: '5px' }}>👤</span>
                                            <span>Admin</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <span style={{ marginRight: '5px' }}>🕐</span>
                                            <span>{item === 1 ? '8 min read' : '6 min read'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogDetail;