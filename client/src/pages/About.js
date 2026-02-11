const About = () => {
    return (
        <div className="page">
            <div className="container page__narrow">
                <header className="page__header">
                    <h1 className="page__title">About Us</h1>
                    <p className="page__lead">
                        We are a procurement execution partner focused on GeM operations, tender workflows, and compliance-driven delivery.
                    </p>
                </header>

                <section className="legal-card prose">
                    <h2>Who We Are</h2>
                    <p>
                        Our team combines domain experts, bid coordinators, and compliance specialists to help businesses operate confidently
                        in government procurement ecosystems.
                    </p>
                    <p>
                        We focus on practical execution: clean documentation, process discipline, and predictable communication.
                    </p>

                    <h2>What We Stand For</h2>
                    <ul>
                        <li>Clarity in deliverables and timelines</li>
                        <li>Compliance-first documentation practices</li>
                        <li>Operational accountability from kickoff to closure</li>
                    </ul>

                    <h2>How We Work</h2>
                    <p>
                        Every engagement follows a structured model: discovery, planning, execution, and review.
                        This gives clients confidence that work is progressing with clear ownership and measurable outcomes.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
