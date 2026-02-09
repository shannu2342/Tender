import React from 'react';

const About = () => {
    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c' }}>About Us</h1>
            <div className="grid gap-8 md:grid-cols-2">
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Who We Are</h2>
                    <p style={{ color: '#718096', lineHeight: '1.8' }}>
                        We are a team of experienced professionals dedicated to providing comprehensive services for the Government e-Marketplace (GeM).
                        Our mission is to simplify the process of doing business with the government by offering end-to-end solutions for GeM registration,
                        catalog management, bid participation, and tender services.
                    </p>
                    <p style={{ color: '#718096', lineHeight: '1.8', marginTop: '16px' }}>
                        With years of experience in government procurement and compliance, we understand the challenges faced by businesses when dealing
                        with government agencies. Our team is committed to providing expert guidance and support to help you navigate the complex world
                        of government tenders and procurement.
                    </p>
                </div>
                <div>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: '#2d3748' }}>Our Mission</h2>
                    <p style={{ color: '#718096', lineHeight: '1.8' }}>
                        Our mission is to bridge the gap between businesses and government agencies by providing efficient and effective solutions for
                        GeM registration and tender participation. We strive to empower businesses of all sizes to leverage government procurement
                        opportunities and grow their businesses.
                    </p>
                    <p style={{ color: '#718096', lineHeight: '1.8', marginTop: '16px' }}>
                        We believe in transparency, integrity, and professionalism in all our dealings. Our team is dedicated to providing the highest
                        level of service and support to our clients, ensuring their success in government procurement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;