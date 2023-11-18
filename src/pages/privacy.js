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
                <title>Terms of Service - LangFlux.space</title>
                <meta name="description" content="Read the privacy policy for using LangFlux.space."/>
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            </Head>
            <div style={termsStyle}>
                <h1 style={headingStyle}>Privacy Policy</h1>
                <p>Last updated: 17th Nov. 2023</p>

                <Section title="Introduction">
                    <p>Welcome to LangFlux.space. We are committed to protecting your privacy and ensuring you have a
                        positive experience on our website and in using our services. This policy outlines our personal
                        data handling practices and your related choices.</p>
                </Section>

                <Section title="1. Data Protection Measures">
                    <p><b>Access Controls</b>: Access to personal data is strictly limited to authorized personnel,
                        enforced through a robust role-based access control system.</p>
                    <p><b>Regular Audits</b>: Our security posture is maintained through frequent audits, ensuring
                        ongoing identification and mitigation of potential security risks.</p>
                    <p><b>Data Minimization</b>: We collect only the essential data necessary for delivering our
                        services, adhering strictly to the principle of 'less is more' in data collection.</p>
                    <p><b>Staff Training</b>: All staff undergo regular data protection and security training to
                        maintain the highest level of awareness and compliance.</p>
                </Section>

                <Section title="2. Data Collection">
                    <p>We collect the following data:</p>
                    <ul>
                        <li>Personal identification information (Name, email address)</li>
                        <li>Device information (browser type, operating system, etc.)</li>
                        <li>Usage data (web pages viewed, time spent on page, links clicked, etc.)</li>
                    </ul>
                </Section>
                <Section title="3. Data Usage">
                    <p>We use the collected data for the following purposes:</p>
                    <ul>
                        <li>Providing and maintaining our services</li>
                        <li>Improving our services</li>
                        <li>Providing customer support</li>
                        <li>Monitoring the usage of our services</li>
                        <li>Providing analytics</li>
                        <li>Preventing fraud</li>
                    </ul>
                </Section>
                <Section title="4. Data Sharing">
                    <p>We do not share your personal data with third parties. Aggregated, anonymized data may be
                        periodically shared with third parties, such as for analytics purposes.</p>
                </Section>
                <Section title="5. Data Retention">
                    <p>We retain personal data for as long as necessary to provide our services, or for other important
                        purposes such as complying with legal obligations, resolving disputes, and enforcing our
                        agreements.</p>
                </Section>
                <Section title="6. Data Security">
                    <p>We take all reasonable steps to protect personal data from misuse and unauthorized access,
                        disclosure, alteration, or destruction. These steps include:</p>
                    <ul>
                        <li>Encrypting personal data at rest</li>
                        <li>Encrypting personal data in transit</li>
                        <li>Regularly testing, assessing, and evaluating our security practices</li>
                    </ul>
                </Section>
                <Section title="7. Your Data Rights">
                    <p>You have the following rights with respect to your personal data:</p>
                    <ul>
                        <li><b>Right to Access</b>: You can request a copy of your personal data.</li>
                        <li><b>Right to Correction</b>: You can correct any incorrect or incomplete personal data.</li>
                        <li><b>Right to Erasure</b>: You can request the deletion of your personal data, within reason.
                        </li>
                        <li><b>Right to Restrict Processing</b>: You can request that we limit the use of your personal
                            data, within reason.
                        </li>
                        <li><b>Right to Object</b>: You can object to the use of your personal data, within reason.</li>
                        <li><b>Right to Data Portability</b>: You can request a copy of your personal data in a
                            machine-readable format.
                        </li>
                        <li><b>Right to Complain</b>: You can lodge a complaint with a supervisory authority.</li>
                    </ul>
                </Section>
                <Section title="8. Service Providers">
                    <p>We may employ third-party companies and individuals to facilitate our services, to provide our
                        services on our behalf, to perform services-related services, or to assist us in analyzing how
                        our services are used.</p>
                    <p>These third parties have access to your personal data only to perform these tasks on our behalf
                        and are obligated not to disclose or use it for any other purpose.</p>
                </Section>
                <Section title="9. Analytics">
                    <p>We may use third-party service providers to monitor and analyze the use of our services.</p>
                    <p>Google Analytics is a web analytics service offered by Google that tracks and reports website
                        traffic. Google uses the data collected to track and monitor the use of our services. This data
                        is shared with other Google services. Google may use the collected data to contextualize and
                        personalize the ads of its own advertising network.</p>
                    <p>You can opt-out of having made your activity on our services available to Google Analytics by
                        installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics
                        JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about
                        visits activity.</p>
                    <p>For more information on the privacy practices of Google, please visit the Google Privacy & Terms
                        web page: <a
                            href="https://policies.google.com/privacy?hl=en">https://policies.google.com/privacy?hl=en</a>
                    </p>
                </Section>
                <Section title="10. Payments">
                    <p>We may provide paid products and/or services within our services. In that case, we use
                        third-party services for payment processing (e.g. payment processors).</p>
                    <p>We will not store or collect your payment card details. That information is provided directly to
                        our third-party payment processors whose use of your personal data is governed by their Privacy
                        Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI
                        Security Standards Council.</p>
                    <p>PCI-DSS requirements help ensure the secure handling of payment information.</p>
                    <p>The payment processors we work with are:</p>
                    <ul>
                        <li><b>Stripe</b>: Their Privacy Policy can be viewed at <a
                            href="https://stripe.com/us/privacy">https://stripe.com/us/privacy</a></li>
                    </ul>
                </Section>
                <Section title="11. Links to Other Sites">
                    <p>Our services may contain links to other sites that are not operated by us. If you click a
                        third-party link, you will be directed to that third party's site. We strongly advise you to
                        review the Privacy Policy of every site you visit.</p>
                    <p>We have no control over and assume no responsibility for the content, privacy policies, or
                        practices of any third-party sites or services.</p>
                </Section>
                <Section title="12. Children's Privacy">
                    <p>Our services are not intended for use by children under the age of 18. We do not knowingly
                        collect personally identifiable information from children under 18. If you become aware that a
                        child has provided us with personal data, please contact us. If we become aware that we have
                        collected personal data from children without verification of parental consent, we take steps to
                        remove that information from our servers.</p>
                </Section>
                <Section title="13. Changes to This Privacy Policy">
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting
                        the new Privacy Policy on this page.</p>
                    <p>We will let you know via email and/or a prominent notice on our services, prior to the change
                        becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                    <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this
                        Privacy Policy are effective when they are posted on this page.</p>
                </Section>
                <Section title="14. Data Breach Protocol">
                    <p>In the event of a data breach, we will notify you via email and/or a prominent notice on our
                        services, within 72 hours of becoming aware of the breach.</p>
                    <p>We will provide additional information to you as we learn more about the breach.</p>
                </Section>

                <Section title="15. Jurisdiction-Specific Requirements">
                    <p><b>BDSG and TMG Compliance</b>: As a Germany-based company, we comply with local data protection
                        laws including the BDSG and TMG, ensuring a higher standard of data privacy.</p>
                    <p><b>GDPR Compliance</b>: We comply with the EU General Data Protection Regulation (GDPR), ensuring
                        a higher standard of data privacy.</p>
                </Section>
                <Section title="16. Limitation of Liability">
                    <p>We are not liable for any damages that may occur from the use of our services. This includes
                        direct, indirect, incidental, consequential, special, and punitive damages, even if we have been
                        advised of the possibility of such damages.</p>
                </Section>
                <Section title="17. Contact Us">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul>
                        <li>By email: <a href="mailto:privacy@langflux.space">privacy@langflux.space</a></li>
                    </ul>
                </Section>
                <Section title="18. Definitions">
                    <p><b>Personal Data</b>: Personal Data means data about a living individual who can be identified
                        from those data (or from those and other information either in our possession or likely to come
                        into our possession).</p>
                    <p><b>Usage Data</b>: Usage Data is data collected automatically either generated by the use of our
                        services or from our services infrastructure itself (for example, the duration of a page visit).
                    </p>
                    <p><b>Cookies</b>: Cookies are small files stored on your device (computer or mobile device).</p>
                    <p><b>Data Controller</b>: Data Controller means the natural or legal person who (either alone or
                        jointly or in common with other persons) determines the purposes for which and the manner in
                        which any personal information are, or are to be, processed.</p>
                    <p>For the purpose of this Privacy Policy, we are a Data Controller of your Personal Data.</p>
                    <p><b>Data Processor (or Service Providers)</b>: Data Processor (or Service Provider) means any
                        natural or legal person who processes the data on behalf of the Data Controller.</p>
                    <p>We may use the services of various Service Providers in order to process your data more
                        effectively.</p>
                    <p><b>Data Subject</b>: Data Subject is any living individual who is the subject of Personal
                        Data.</p>
                    <p><b>User</b>: The User is the individual using our services. The User corresponds to the Data
                        Subject, who is the subject of Personal Data.</p>
                </Section>

            </div>
        </>);
};

export default Privacy;
