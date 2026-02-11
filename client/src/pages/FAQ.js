import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { faqs } from '../data/siteContent';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="page">
            <div className="container page__narrow">
                <header className="page__header">
                    <h1 className="page__title">Frequently Asked Questions</h1>
                    <p className="page__lead">
                        Common questions about our services, onboarding model, and enterprise support.
                    </p>
                </header>

                <div className="grid gap-8">
                    {faqs.map((item, index) => {
                        const isOpen = index === activeIndex;
                        return (
                            <article className="card" key={item.q}>
                                <button
                                    type="button"
                                    className="btn btn-secondary faq-trigger"
                                    onClick={() => setActiveIndex(isOpen ? -1 : index)}
                                >
                                    <span className="faq-trigger__label">{item.q}</span>
                                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                </button>
                                {isOpen ? (
                                    <div className="card-body">
                                        <p className="section-subtitle">{item.a}</p>
                                    </div>
                                ) : null}
                            </article>
                        );
                    })}
                </div>

                <div className="hero-panel mt-24">
                    <h2 className="section-title">Need More Clarity?</h2>
                    <p className="section-subtitle">Share your use case and we will provide a tailored recommendation.</p>
                    <div className="cta-row">
                        <Link to="/contact" className="btn btn-primary">Contact Team</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
