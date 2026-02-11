const PolicyPage = ({ title, lead, sections, footerNote }) => {
    return (
        <div className="page">
            <div className="container page__narrow">
                <header className="page__header">
                    <h1 className="page__title">{title}</h1>
                    <p className="page__lead">{lead}</p>
                </header>

                <article className="legal-card prose">
                    {sections.map((section, index) => (
                        <section key={section.heading || index}>
                            <h2>{section.heading}</h2>
                            {section.paragraphs?.map((text) => (
                                <p key={text}>{text}</p>
                            ))}
                            {section.list?.length ? (
                                <ul>
                                    {section.list.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            ) : null}
                            {section.orderedList?.length ? (
                                <ol>
                                    {section.orderedList.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ol>
                            ) : null}
                        </section>
                    ))}
                    {footerNote ? <p className="notice">{footerNote}</p> : null}
                </article>
            </div>
        </div>
    );
};

export default PolicyPage;
