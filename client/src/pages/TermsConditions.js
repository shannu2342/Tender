import React from 'react';

const TermsConditions = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Terms and Conditions</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Please read these terms and conditions carefully before using our services.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>1. Acceptance of Terms</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    By accessing or using our website and services, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with these terms, please do not use our website or services.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>2. Use of Services</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    Our services are provided for the purpose of assisting businesses with government procurement, tender participation, and related activities. You agree to use our services only for lawful purposes and in accordance with these terms.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>You must be at least 18 years of age to use our services</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining the confidentiality of your account</li>
                    <li>You agree not to use our services for any illegal or unauthorized purpose</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>3. Service Description</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We provide a range of services including GeM registration, catalog management, tender participation support, bid preparation, and government procurement consulting. The specific services offered may vary and are subject to change.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>4. Fees and Payment</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    Fees for our services are as listed on our website or as agreed upon in writing. Payment terms and conditions are specified for each service. You agree to pay all fees in a timely manner.
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Fees are payable in Indian Rupees (INR)</li>
                    <li>Payment can be made by bank transfer, credit card, or other approved methods</li>
                    <li>Additional charges may apply for urgent services or customization</li>
                    <li>All prices are subject to change without notice</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>5. Refund Policy</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    Our refund policy varies depending on the service. For detailed information, please refer to our Refund Policy.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>6. Intellectual Property</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    All content on our website, including text, graphics, logos, images, and software, is the property of our company and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>7. Limitation of Liability</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    Our services are provided "as is" and "as available". We make no warranties, express or implied, regarding the quality, reliability, or availability of our services. We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of the use or inability to use our services.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>8. Governing Law</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    These Terms and Conditions are governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Delhi.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>9. Termination</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We reserve the right to terminate or suspend your access to our services at any time, without notice, for any reason, including but not limited to violation of these terms.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>10. Changes to Terms</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new terms on this page. Your continued use of our services after any changes constitutes acceptance of the new terms.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>11. Contact Us</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsConditions;