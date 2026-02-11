import { Link } from 'react-router-dom';
import { pricingPlans } from '../data/siteContent';
import { useManagedPage } from '../hooks/useManagedPage';
import { pageTemplates } from '../config/pageTemplates';

const Pricing = () => {
    const content = useManagedPage('pricing', pageTemplates.pricing);
    const plans = content.plans || pricingPlans;

    return (
        <div className="page">
            <div className="container">
                <header className="page__header page__narrow">
                    <h1 className="page__title">{content.title}</h1>
                    <p className="page__lead">{content.lead}</p>
                </header>

                <div className="grid gap-8 md:grid-cols-3">
                    {plans.map((plan) => (
                        <article key={plan.name} className="card">
                            <div className="card-body">
                                {plan.featured ? <span className="chip chip--premium">Most Popular</span> : null}
                                <h2 className="section-title mt-10">{plan.name}</h2>
                                <p className="plan-price">
                                    {plan.price}
                                    <span className="plan-price__freq">{plan.frequency || ''}</span>
                                </p>
                                <ul className="list-clean list-check mt-14">
                                    {(plan.points || []).map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                                <div className="cta-row">
                                    <Link to="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                                        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="hero-panel mt-30">
                    <h2 className="section-title">Need a Custom Commercial Model?</h2>
                    <p className="section-subtitle">For high-volume teams, we support retainer and SLA-backed pricing structures.</p>
                    <div className="cta-row">
                        <Link to="/contact" className="btn btn-primary">Book Pricing Discussion</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
