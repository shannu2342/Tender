

const About = () => {
    return (
        <div className="page">
            <div className="container">
                <header className="page__header" style={{ textAlign: 'left' }}>
                    <h1 className="page__title">About Us</h1>
                    <p className="page__lead" style={{ marginInline: 0 }}>
                        We help businesses participate in GeM and government procurement with compliant, structured, and timely execution.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 prose">
                <div>
                    <h2>Who We Are</h2>
                    <p>
                        We are a team of experienced professionals dedicated to providing comprehensive services for the Government e-Marketplace (GeM).
                        Our mission is to simplify the process of doing business with the government by offering end-to-end solutions for GeM registration,
                        catalog management, bid participation, and tender services.
                    </p>
                    <p>
                        With years of experience in government procurement and compliance, we understand the challenges faced by businesses when dealing
                        with government agencies. Our team is committed to providing expert guidance and support to help you navigate the complex world
                        of government tenders and procurement.
                    </p>
                </div>
                <div>
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to bridge the gap between businesses and government agencies by providing efficient and effective solutions for
                        GeM registration and tender participation. We strive to empower businesses of all sizes to leverage government procurement
                        opportunities and grow their businesses.
                    </p>
                    <p>
                        We believe in transparency, integrity, and professionalism in all our dealings. Our team is dedicated to providing the highest
                        level of service and support to our clients, ensuring their success in government procurement.
                    </p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;
