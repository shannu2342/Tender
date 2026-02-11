import { ShieldCheck, Gauge, Users, Handshake } from 'lucide-react';

const reasons = [
    {
        title: 'Specialized Procurement Team',
        text: 'Dedicated resources for GeM, bid preparation, and documentation quality control.',
        icon: Users
    },
    {
        title: 'Compliance-Led Execution',
        text: 'We design each step to reduce non-compliance risk and avoid last-minute submission failures.',
        icon: ShieldCheck
    },
    {
        title: 'Faster Decision Cycles',
        text: 'Structured data and clear handoffs help your team decide faster on bid participation.',
        icon: Gauge
    },
    {
        title: 'Long-Term Partnership Model',
        text: 'Our workflows are built for sustained operations, not one-time transactions.',
        icon: Handshake
    }
];

const WhyChooseUs = () => {
    return (
        <div className="page">
            <div className="container">
                <header className="page__header page__narrow">
                    <h1 className="page__title">Why Choose Us</h1>
                    <p className="page__lead">
                        Enterprise teams trust us because we deliver procurement support with operational rigor and consistent communication.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2">
                    {reasons.map((item) => {
                        const Icon = item.icon;
                        return (
                            <article key={item.title} className="card">
                                <div className="card-body">
                                    <span className="chip chip--sky"><Icon size={14} /> Enterprise Standard</span>
                                    <h2 className="section-title mt-12">{item.title}</h2>
                                    <p className="section-subtitle">{item.text}</p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
