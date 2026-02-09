

const Disclaimer = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Disclaimer</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Please read this disclaimer carefully before using our website or services.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>1. Information Accuracy</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    The information on this website is for general informational purposes only. While we strive to ensure that the information is accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>2. Professional Advice</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    The information on this website is not intended to be a substitute for professional advice. Before making any decisions based on the information provided, you should consult with a qualified professional who can assess your specific circumstances.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>3. Service Availability</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We make every effort to ensure that our services are available at all times. However, we cannot guarantee that our website or services will be available without interruption, delay, errors, or omissions. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>4. Third-Party Links</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    Our website may contain links to third-party websites or services. These links are provided for your convenience only. We do not control these third-party websites or services, and we are not responsible for their content, privacy policies, or practices. We recommend that you review the privacy policies and terms of use of any third-party websites or services that you visit.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>5. Limitation of Liability</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website or our services.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>6. Governing Law</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    This disclaimer is governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with this disclaimer shall be subject to the exclusive jurisdiction of the courts in Delhi.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>7. Changes to Disclaimer</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We may update this disclaimer from time to time. We will notify you of any changes by posting the new disclaimer on this page. Your continued use of our website or services after any changes constitutes acceptance of the new disclaimer.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>8. Contact Us</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    If you have any questions about this disclaimer, please contact us at:
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

export default Disclaimer;