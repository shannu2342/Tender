import { ShieldCheck, Gauge, Users, Handshake } from 'lucide-react';
import { useManagedPage } from '../hooks/useManagedPage';
import { pageTemplates } from '../config/pageTemplates';

const icons = [Users, ShieldCheck, Gauge, Handshake];

const WhyChooseUs = () => {
    const content = useManagedPage('why_choose_us', pageTemplates.why_choose_us);

    return (
        <div className="page">
            <div className="container">
                <header className="page__header page__narrow">
                    <h1 className="page__title">{content.title}</h1>
                    <p className="page__lead">{content.lead}</p>
                </header>

                <div className="grid gap-8 md:grid-cols-2">
                    {(content.items || []).map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <article key={item.title} className="card">
                                <div className="card-body">
                                    <span className="chip chip--sky why-card__tag"><Icon size={14} /> Enterprise Standard</span>
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
