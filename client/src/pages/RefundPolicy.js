

const RefundPolicy = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Refund Policy</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Our refund policy outlines the circumstances under which you may be eligible for a refund.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>1. Introduction</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We understand that there may be circumstances where you need to request a refund. This Refund Policy explains the conditions under which refunds are granted.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>2. Eligibility for Refunds</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    Refunds may be considered in the following circumstances:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Service not delivered as promised</li>
                    <li>Technical issues that prevent use of the service</li>
                    <li>Duplicate payment</li>
                    <li>Other valid reasons as determined by our management</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>3. Non-Refundable Services</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    The following services are generally non-refundable:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Services that have been completed</li>
                    <li>Products or services downloaded or accessed</li>
                    <li>Services that require custom work or development</li>
                    <li>Services canceled after the completion date</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>4. Refund Process</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    To request a refund, please follow these steps:
                </p>
                <ol style={{ listStyle: 'decimal', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Contact our customer support team within 7 days of purchase or service delivery</li>
                    <li>Provide details of your purchase and the reason for the refund request</li>
                    <li>Include any relevant documentation or evidence</li>
                    <li>Our team will review your request and respond within 3-5 business days</li>
                </ol>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>5. Refund Timeline</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    If your refund request is approved, we will process the refund within 7-10 business days. The time it takes for the refund to appear in your account may vary depending on your payment method and financial institution.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>6. Partial Refunds</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    In some cases, we may offer a partial refund based on the circumstances. The amount of the partial refund will be determined on a case-by-case basis.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>7. Refusal of Refunds</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We reserve the right to refuse a refund request if:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>The request is made after the 7-day window</li>
                    <li>The service has been used or accessed</li>
                    <li>The request is for a non-refundable service</li>
                    <li>The reason for the refund is not valid</li>
                    <li>There is no evidence of the service not being delivered as promised</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>8. Changes to Refund Policy</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We may update this Refund Policy from time to time. We will notify you of any changes by posting the new policy on this page. Your continued use of our services after any changes constitutes acceptance of the new policy.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>9. Contact Us</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    If you have any questions about this Refund Policy or want to request a refund, please contact us at:
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

export default RefundPolicy;