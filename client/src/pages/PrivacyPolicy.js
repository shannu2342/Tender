import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Privacy Policy</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                We respect your privacy and are committed to protecting your personal information.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>1. Introduction</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website, use our services, or interact with us. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>2. Information We Collect</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    We may collect the following types of personal information:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Contact information such as name, email address, and phone number</li>
                    <li>Business information such as company name, GST number, and address</li>
                    <li>Financial information such as bank details and payment information</li>
                    <li>Usage information such as IP address, browser type, and access times</li>
                    <li>Communications between you and us</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>3. How We Use Your Information</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    We may use your personal information for the following purposes:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>To provide and improve our services</li>
                    <li>To communicate with you about our services</li>
                    <li>To process payments and transactions</li>
                    <li>To comply with legal obligations</li>
                    <li>To detect and prevent fraud</li>
                    <li>To personalize your experience</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>4. Information Sharing and Disclosure</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    We may share your personal information with:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Service providers who assist us in delivering our services</li>
                    <li>Government agencies as required by law</li>
                    <li>Other third parties with your consent</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>5. Data Security</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the security of your personal information.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>6. Your Rights</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    You have the right to:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Access your personal information</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Delete your personal information</li>
                    <li>Restrict or object to the processing of your personal information</li>
                    <li>Data portability</li>
                    <li>Withdraw consent</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>7. Cookies and Tracking Technologies</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We use cookies and similar tracking technologies to track activity on our website and improve your experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. However, if you disable or refuse cookies, please note that some parts of our website may become inaccessible or not function properly.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>8. Changes to This Privacy Policy</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>9. Contact Us</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div style={{ color: '#718096', lineHeight: '1.8' }}>
                    <p>Email: info@example.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Address: 123 Business Park, Sector 18, Noida, Uttar Pradesh 201301</p>
                </div>

                <div style={{ marginTop: '50px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', textAlign: 'center', color: '#718096' }}>
                    <p>Last Updated: October 2023</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;