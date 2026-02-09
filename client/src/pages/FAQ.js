import { useState } from 'react';

const FAQ = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const faqs = [
        {
            question: 'What is GeM?',
            answer: 'GeM (Government e-Marketplace) is an online platform for government procurement in India. It provides an end-to-end solution for the procurement of goods and services by government organizations.'
        },
        {
            question: 'Who can register on GeM?',
            answer: 'Any business entity registered in India, including startups, MSMEs, and large enterprises, can register on GeM. Individuals are not eligible for registration.'
        },
        {
            question: 'What documents are required for GeM registration?',
            answer: 'The documents required include PAN card, GST certificate, bank details, company registration certificate, and other relevant documents. Our team will guide you through the entire document submission process.'
        },
        {
            question: 'How long does the GeM registration process take?',
            answer: 'The registration process typically takes 1-3 working days. Our expert team ensures quick registration by helping you prepare and submit all required documents correctly.'
        },
        {
            question: 'What services do you offer?',
            answer: 'We offer end-to-end solutions for GeM registration, catalog management, bid preparation, tender participation, and government procurement consulting.'
        },
        {
            question: 'How do you help with tender participation?',
            answer: 'We help you identify relevant tenders, prepare competitive bids, ensure compliance with specifications, and submit bids on time. Our expert guidance increases your chances of winning tenders.'
        },
        {
            question: 'What are your pricing plans?',
            answer: 'We offer flexible pricing plans starting from ₹999 per month. Our plans include GeM registration, catalog management, tender access, and support. Contact us for custom pricing for enterprise requirements.'
        },
        {
            question: 'Do you provide support after registration?',
            answer: 'Yes, we provide ongoing support after registration. Our team is available to help with catalog management, bid preparation, tender participation, and any other issues you may face.'
        }
    ];

    const toggleFaq = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="container" style={{ padding: '60px 0' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#1a202c', textAlign: 'center' }}>FAQ</h1>
            <p style={{ color: '#718096', lineHeight: '1.8', textAlign: 'center', marginBottom: '60px' }}>
                Find answers to common questions about GeM and our services.
            </p>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                    <div key={index} className="card" style={{ marginBottom: '16px' }}>
                        <div
                            style={{
                                padding: '20px',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                backgroundColor: expandedIndex === index ? '#f7fafc' : 'white'
                            }}
                            onClick={() => toggleFaq(index)}
                        >
                            <h3 style={{ fontSize: '1.1rem', color: '#2d3748', margin: '0' }}>
                                {faq.question}
                            </h3>
                            <span style={{
                                fontSize: '1.5rem',
                                color: '#718096',
                                transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease'
                            }}>
                                ▼
                            </span>
                        </div>
                        {expandedIndex === index && (
                            <div style={{ padding: '0 20px 20px', color: '#718096' }}>
                                <p style={{ margin: '0', lineHeight: '1.6' }}>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <p style={{ color: '#718096', marginBottom: '20px' }}>
                    Still have questions? Contact us for more information.
                </p>
                <button className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '12px 24px' }}>
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default FAQ;