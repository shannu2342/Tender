import { SearchCheck, FileCheck2, Send, BarChart3 } from 'lucide-react';

const steps = [
    {
        title: 'Discovery and Scope',
        text: 'We map your business goals, current readiness, and target procurement segments.',
        icon: SearchCheck
    },
    {
        title: 'Documentation and Setup',
        text: 'All required files, templates, and compliance checkpoints are organized in a clear workflow.',
        icon: FileCheck2
    },
    {
        title: 'Execution and Submission',
        text: 'Our team supports listings, bid drafting, and submission activities against strict timelines.',
        icon: Send
    },
    {
        title: 'Reporting and Optimization',
        text: 'Performance insights and process feedback loops are used to improve future outcomes.',
        icon: BarChart3
    }
];

const HowItWorks = () => {
    return (
        <div className="page">
            <div className="container">
                <header className="page__header page__narrow">
                    <h1 className="page__title">How It Works</h1>
                    <p className="page__lead">
                        A delivery model designed for reliability, transparency, and repeatable execution quality.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <article className="card" key={step.title}>
                                <div className="card-body">
                                    <span className="chip">Step {index + 1}</span>
                                    <h2 className="section-title mt-12">{step.title}</h2>
                                    <p className="section-subtitle">{step.text}</p>
                                    <div className="chip-row mt-12">
                                        <span className="chip chip--sky"><Icon size={14} /> Structured Delivery</span>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
