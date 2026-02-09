import React from 'react';

const Sitemap = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Sitemap</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Find all pages and sections of our website.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Main Navigation</h2>
                <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#718096', lineHeight: '1.8', marginBottom: '40px' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Home
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/about" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            About Us
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/why-choose-us" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Why Choose Us
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/how-it-works" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            How It Works
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/services" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Services
                        </a>
                        <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '10px', marginBottom: '10px' }}>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/gem-registration" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    GeM Registration
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/gem-brand-approval" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    GeM Brand Approval
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/gem-catalogue-upload" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    GeM Catalogue Upload
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/gem-bid-participation" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    GeM Bid Participation
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/tender-registration" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    Tender Registration
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/msme-udyam" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    MSME / Udyam
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/startup-india" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    Startup India
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/iso" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    ISO
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/trademark" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    Trademark
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/gst" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    GST
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/income-tax" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    Income Tax
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/pan-tan" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    PAN / TAN
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/compliance" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    Compliance
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/amc" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    AMC
                                </a>
                            </li>
                            <li style={{ marginBottom: '5px' }}>
                                <a href="/services/consultancy" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                                    Consultancy
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/pricing" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Pricing
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/testimonials" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Testimonials
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/faq" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            FAQ
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/contact" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Contact Us
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/blog" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Blog
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/tenders" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Tenders
                        </a>
                    </li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Legal Pages</h2>
                <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#718096', lineHeight: '1.8', marginBottom: '40px' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/privacy-policy" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Privacy Policy
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/terms-conditions" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Terms & Conditions
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/refund-policy" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Refund Policy
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/cancellation-policy" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Cancellation Policy
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/disclaimer" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Disclaimer
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/tender-disclaimer" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Tender Disclaimer
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/service-agreement" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Service Agreement
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/compliance" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Compliance
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/sitemap" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Sitemap
                        </a>
                    </li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Admin Panel</h2>
                <ul style={{ listStyle: 'none', paddingLeft: '0', color: '#718096', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/login" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Admin Login
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/dashboard" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Dashboard
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/pages" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Manage Pages
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/services" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Manage Services
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/tenders" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Manage Tenders
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/blogs" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Manage Blogs
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/enquiries" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            View Enquiries
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/users" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Manage Users
                        </a>
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <a href="/admin/settings" style={{ color: '#2563eb', textDecoration: 'none', transition: 'color 0.3s' }}>
                            Settings
                        </a>
                    </li>
                </ul>

                <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', textAlign: 'center', color: '#718096' }}>
                    <p>Last Updated: October 2023</p>
                </div>
            </div>
        </div>
    );
};

export default Sitemap;