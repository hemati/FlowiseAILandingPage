// pages/terms.js
import Head from 'next/head';

const style = {
    termsContainer: {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        lineHeight: '1.6',
        fontSize: '16px',
        color: '#333',
        fontFamily: '"Open Sans", sans-serif',
    }, heading: {
        marginTop: '2em', marginBottom: '0.5em',
    }, link: {
        color: '#0066cc',
    },
};

const Section = ({title, children}) => (<>
        <h2 style={style.heading}>{title}</h2>
        {children}
    </>);

const Privacy = () => {
    const termsStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        lineHeight: '1.6',
        fontSize: '16px',
        color: '#333',
        fontFamily: '"Open Sans", sans-serif',
    };

    const headingStyle = {
        marginTop: '2em', marginBottom: '0.5em',
    };

    const linkStyle = {
        color: '#0066cc',
    };

    return (<>
            <Head>
                <title>Imprint - LangFlux.space</title>
                <meta name="description" content="Read the imprint for using LangFlux.space."/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <div style={termsStyle}>
                <h1 style={headingStyle}>Imprint</h1>
                <p>Last updated: 17th Nov. 2023</p>

                <Section>
                    <p>MindLike UG (haftungsbeschränkt) ("us", "we", or "our") operates the LangFlux.space website</p>
                    <div>Kurhessenstr. 3 b<br/>
                    D-63075 Offenbach am Main<br/>
                    E-Mail: info@mindlike.ai<br/>
                    Registergericht: Amtsgericht Offenbach am Main<br/>
                    Registernummer: HRB 50940</div>
                </Section>

                <Section title="Liability notice">
                    <p>Despite areful control, we do not take any liability for the contents of external links. The operators of the linked pages are solely responsible for their content.</p>
                </Section>


                <Section title="Information on Alternative Dispute Resolution">
                    <p>The EU Commission provides an online platform for dispute resolution ("OS Platform"), which can be accessed via the link http://ec.europa.eu/odr. If the customer is a consumer resident in the European Union, it is possible to use this platform for out-of-court settlement of disputes about contractual obligations arising from online purchase contracts. The seller is not obliged to participate in a dispute resolution procedure before a consumer arbitration board and is not prepared to do so.</p>
                </Section>

                <Section title="Note">
                    <p>MindLike UG (haftungsbeschränkt) reserves the right to make changes and additions at any time. Despite careful examination of all contents, MindLike UG (haftungsbeschränkt) does not guarantee the accuracy and completeness of the information provided.</p>
                </Section>

                <p>All other trademarks referenced herein are the properties to their respective owners.</p>

            </div>
        </>);
};

export default Privacy;
