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
  },
  heading: {
    marginTop: '2em',
    marginBottom: '0.5em',
  },
  link: {
    color: '#0066cc',
  },
};

const Section = ({ title, children }) => (
  <>
    <h2 style={style.heading}>{title}</h2>
    {children}
  </>
);

const TermsOfService = () => {
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
    marginTop: '2em',
    marginBottom: '0.5em',
  };

  const linkStyle = {
    color: '#0066cc',
  };

  return (
    <>
      <Head>
        <title>Terms of Service - LangFlux.space</title>
        <meta name="description" content="Read the terms of service for using LangFlux.space." />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>
      <div style={termsStyle}>
        <h1 style={headingStyle}>Terms of Service for LangFlux.space</h1>
        <p>Last updated: 3rd Dec. 2023</p>

        <Section title="Introduction">
        <p>The Service provides a platform for building and deploying language model chains ("LLM Chains") through a user-friendly interface or via an API. It's designed as a no-code/low-code framework to facilitate the development of language applications.</p>
        </Section>

        <Section title="User Account Management">
        <p>Users can register using their Google, Facebook, Twitter, GitHub, or email address. The registration and account management are facilitated by Firebase, and the Service does not offer different account types with varying levels of access or permissions.</p>
        </Section>

        <Section title="Data Protection and Privacy">
        <p>The Service collects users' names and email addresses for account creation and management. Consent for data collection is obtained in accordance with Firebase’s protocols. For any data transfer, particularly across national borders, the Service relies on the data handling policies of Firebase, which are compliant with relevant data protection regulations.</p>
        </Section>

        <Section title="Content Ownership and Intellectual Property">
        <p>User-generated content remains the intellectual property of the user. The Service stores this content to enable user access and use within the Service. LangFlux.space does not share, repurpose, or redistribute user-generated content without the user’s consent.</p>
        </Section>

        <Section title="User Behavior and Conduct">
          <p>
            Users are expected to use LangFlux.space responsibly and legally. The following behaviors are explicitly prohibited: engaging in illegal activities, harassment of other users, dissemination of harmful or offensive content, and any other misuse that could disrupt the Service or the experience of other users. Violations may result in immediate suspension or termination of your account.
          </p>
        </Section>

        <Section title="Derivative Works">
          <p>
            Any derivative works created by users through the use of LangFlux.space's platform are subject to the original terms of content ownership. Users maintain ownership over their content and are responsible for the intellectual property rights of their derivative works. LangFlux.space claims no ownership over such derivative content but may require a license to use it for operating the Service.
          </p>
        </Section>

        <Section title="Reporting Abuse">
          <p>
            If you encounter any content or behavior that violates our Terms of Service, please report it to us immediately at abuse@langflux.space. We are committed to reviewing all reports and taking appropriate action to maintain the integrity and safety of our Service.
          </p>
        </Section>

        <Section title="Third-Party Integrations and Services">
        <p>The Service integrates with Firebase for user authentication and analytics. The terms and conditions of these third-party services are available through their respective platforms and should be reviewed by the user, as they are separate from LangFlux.space.</p>
        </Section>

        <Section title="Open Source Licensing and Attribution">
          <p>
            This product includes software developed by Flowise AI, which is licensed under the Apache License, Version 2.0. The Apache License is a free, open-source software license that provides users with certain permissions regarding the use and distribution of the software.
          </p>
          <p>
            A copy of the Apache License, Version 2.0, can be found at <a style={linkStyle} href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank" rel="noopener noreferrer">http://www.apache.org/licenses/LICENSE-2.0</a>. This license is provided for informational purposes and forms part of the legal agreement between you and LangFlux.space when you use our Service.
          </p>
          <p>
            We have made certain changes to the original software to better integrate it into our Service. These changes are documented in the source code and are made available as per the terms of the Apache License, Version 2.0.
          </p>
          <p>
            By using our Service, you agree to comply with the terms and conditions of the Apache License, Version 2.0, in addition to the terms and conditions outlined in our Terms of Service.
          </p>
        </Section>


        <Section title="Payment Processing">
        <p>The Service offers a Plus subscription for €10 per month to users who wish to create more than one flow. A 7-day trial period is provided, and users can cancel their subscription towards the end of each subscription period. All payments are processed in Euros, and tax considerations are managed in accordance with EU and German tax laws.</p>
        </Section>

        <Section title="Subscription Fees and Changes">
          <p>
            The current subscription fee for the Plus subscription is €10 per month. LangFlux.space reserves the right to modify the subscription fees for any services offered. Should there be a change in subscription fees, LangFlux.space will provide at least 30 days’ notice to all active subscribers via email or a prominent notice on the service. Continued use of the Service after the fee change comes into effect constitutes your agreement to pay the modified subscription fee amount.
          </p>
        </Section>

        <Section title="Refund Policy">
          <p>
            LangFlux.space offers a 7-day trial period during which you can cancel your subscription without charge. After the trial period, if you cancel your subscription, you will not receive a refund for any subscription fees already paid. We do not offer refunds or credits for partial subscription periods. To cancel your subscription, please follow the instructions in the Service's account settings.
          </p>
        </Section>

        <Section title="Compliance and Legal Obligations">
        <p>Users have the right to be forgotten and data portability under the GDPR. A mechanism for deleting user data is in place; users must request data deletion via email.</p>
        </Section>

        <Section title="Modification of Services">
        <p>The Service is updated frequently. Users will be notified of significant changes to the services or ToS via email and through the Service's Discord channel.</p>
        </Section>

        <Section title="User Conduct and Responsibilities">
        <p>Acceptable and prohibited uses of the Service will be defined in accordance with the functionality of the Service. Violations of the ToS will be handled on a case-by-case basis, with potential outcomes including account suspension or termination.</p>
        </Section>

        <Section title="Dispute Resolution">
        <p>Disputes between LangFlux.space and its users will be resolved through arbitration or mediation, as preferred, and in accordance with German law.</p>
        </Section>

        <Section title="Jurisdiction">
        <p>LangFlux.space is based in Germany, and German law will govern the resolution of disputes.</p>
        </Section>

        <Section title="Impressum Requirements">
        <p>The Service will include an Impressum page with legally required disclosure information in compliance with German law.</p>
        </Section>

        <Section title="Disclaimer of Warranties">
          <p>The Service is provided on an "as is" and "as available" basis. LangFlux.space makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included on the Service. You expressly agree that your use of the Service is at your sole risk.</p>
        </Section>

        <Section title="Limitation of Liability">
            <p>In no event shall LangFlux.space be liable for any direct, indirect, incidental, special, or consequential damages, including, but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the Service.</p>
        </Section>

        <Section title="Indemnification">
            <p>You agree to indemnify and hold harmless LangFlux.space and its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, due to or arising out of your use of the Service.</p>
        </Section>

        <Section title="Severability">
            <p>If any provision of these Terms of Service is held to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Service will continue in full force and effect.</p>
        </Section>

        <Section title="Governing Law">
            <p>These Terms of Service shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions.</p>
        </Section>

        <Section title="Changes to Terms of Service">
            <p>LangFlux.space reserves the right to update and change the Terms of Service from time to time without notice. Any new features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to such changes.</p>
        </Section>

        <Section title="Contact Information">
          <p>Customer support is available via <a style={linkStyle} href="mailto:support@langflux.space">support@langflux.space</a>. Legal inquiries can be directed to  <a style={linkStyle} href="mailto:legal@langflux.space">legal@langflux.space</a>.</p>
        </Section>

        <Section title="Acceptance of Terms">
        <p>
          By accessing or using LangFlux.space, you confirm that you have read, understood, and agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization or entity, you represent and warrant that you have the authority to bind that organization to these Terms of Service. In that case, "you" and "your" will refer to the organization.
        </p>
        <p>
          These Terms apply to all visitors, users, and others who access or use the Service. If you disagree with any part of the terms, then you do not have permission to access the Service.
        </p>
        <p>
          Use of the Service includes accessing, browsing, or registering to use our Service. By using the Service, you agree to comply with all local laws and regulations applicable to your use of the Service. Any new features or tools which are added to the current Service shall also be subject to the Terms of Service.
        </p>
        <p>
          We reserve the right to update and change these Terms of Service from time to time without notice. Any changes to the Terms will be in effect as of the "Last Updated" date referenced on the Service. You agree to review these Terms of Service periodically to be aware of any such changes. Your continued access or use of the Service after any changes become effective will be considered as your acceptance of those changes.
        </p>
        <p>
          If you violate any of the terms outlined here, we reserve the right to suspend or terminate your access to the Service, which may be without prior notice or liability of any kind.
        </p>
        </Section>
      </div>
    </>
  );
};

export default TermsOfService;
