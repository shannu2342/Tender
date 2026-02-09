

const CancellationPolicy = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>Cancellation Policy</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Our cancellation policy outlines the procedures and fees for canceling services.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'white', padding: '40px', borderRadius: '5px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>1. Introduction</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    This Cancellation Policy explains the procedures and fees for canceling our services. We understand that circumstances may change, and we aim to provide clear guidelines for cancellations.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>2. Cancellation Timeframes</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    The cancellation policy varies depending on the service and the time of cancellation:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li><strong>More than 48 hours before service delivery:</strong> Full refund</li>
                    <li><strong>24-48 hours before service delivery:</strong> 50% refund</li>
                    <li><strong>Less than 24 hours before service delivery:</strong> No refund</li>
                    <li><strong>After service has started:</strong> No refund</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>3. Cancellation Process</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    To cancel a service, please follow these steps:
                </p>
                <ol style={{ listStyle: 'decimal', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Contact our customer support team by email or phone</li>
                    <li>Provide your booking details and the reason for cancellation</li>
                    <li>Our team will process your cancellation request</li>
                    <li>Refunds will be processed according to the cancellation timeframe</li>
                </ol>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>4. Non-Cancelable Services</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    The following services are generally non-cancelable:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li>Services that have already been completed</li>
                    <li>Services with immediate delivery</li>
                    <li>Services requiring custom work or development</li>
                    <li>Services with a specific delivery deadline</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>5. Cancellation Fees</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '20px' }}>
                    Cancellation fees may apply depending on the timing:
                </p>
                <ul style={{ listStyle: 'disc', paddingLeft: '25px', color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    <li><strong>More than 48 hours before delivery:</strong> No cancellation fee</li>
                    <li><strong>24-48 hours before delivery:</strong> 50% cancellation fee</li>
                    <li><strong>Less than 24 hours before delivery:</strong> 100% cancellation fee</li>
                </ul>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>6. Refund Process</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    Refunds for canceled services will be processed according to our Refund Policy. The refund will be issued to the original payment method within 7-10 business days.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>7. Force Majeure</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We reserve the right to cancel or postpone services due to force majeure events, including but not limited to natural disasters, political unrest, or other unforeseen circumstances beyond our control. In such cases, we will provide a full refund or reschedule the service at no additional cost.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>8. Changes to Cancellation Policy</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    We may update this Cancellation Policy from time to time. We will notify you of any changes by posting the new policy on this page. Your continued use of our services after any changes constitutes acceptance of the new policy.
                </p>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>9. Contact Us</h2>
                <p style={{ color: '#718096', lineHeight: '1.8', marginBottom: '30px' }}>
                    If you have any questions about this Cancellation Policy or want to cancel a service, please contact us at:
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

export default CancellationPolicy;