export const metadata = {
  title: 'Compliance & Legal | Sonke Capital',
  description:
    'Compliance, regulatory status, company policies, and legal terms of Sonke Capital Pty Ltd.',
};

export default function CompliancePage() {
  return (
    <main className="py-28 max-w-6xl mx-auto px-6 text-gray-800">
      {/* HEADER */}
      <h1 className="text-4xl font-bold text-blue-900 mb-8">
        Compliance, Legal & Company Policies
      </h1>

      <p className="text-lg mb-10">
        This page outlines the regulatory position, legal status, operational
        policies, and terms governing Sonke Capital Pty Ltd. It is intended to
        provide transparency to stakeholders, lenders, counterparties, and
        regulatory bodies.
      </p>

      {/* COMPANY STATUS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          1. Company Registration & Status
        </h2>
        <p className="mb-4">
          Sonke Capital Pty Ltd is a private company duly incorporated and
          registered with the Companies and Intellectual Property Commission
          (CIPC) of the Republic of South Africa.
        </p>
        <p className="mb-4">
          The company maintains valid Broad-Based Black Economic Empowerment
          (B-BBEE) status in accordance with applicable South African legislation.
        </p>
        <p>
          Company Registration Number:{' '}
          <strong>[TO BE INSERTED]</strong>
        </p>
      </section>

      {/* REGULATORY POSITION */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          2. Regulatory & FSCA Position
        </h2>
        <p className="mb-4">
          Sonke Capital Pty Ltd operates strictly as a proprietary trading
          company. The company trades exclusively using its own capital and does
          not provide financial services to the public.
        </p>
        <p className="mb-4">
          As Sonke Capital does not accept client funds, does not manage assets
          on behalf of third parties, and does not provide financial advice or
          intermediary services, it is not required to be licensed by the
          Financial Sector Conduct Authority (FSCA).
        </p>
        <p className="font-medium">
          Sonke Capital does not:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>Offer investment products to the public</li>
          <li>Trade on behalf of clients</li>
          <li>Manage or pool third-party funds</li>
          <li>Provide financial advice or portfolio management</li>
        </ul>
      </section>

      {/* BUSINESS MODEL */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          3. Business Model & Trading Activities
        </h2>
        <p className="mb-4">
          Sonke Capital’s primary business activity is proprietary trading across
          various financial markets, including but not limited to foreign
          exchange (forex), contracts for difference (CFDs), synthetic indices,
          commodities, and related derivative instruments.
        </p>
        <p>
          All trading decisions, strategies, and risk exposures are executed
          internally and solely for the benefit of the company’s own balance
          sheet.
        </p>
      </section>

      {/* RISK MANAGEMENT */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          4. Risk Management & Governance
        </h2>
        <p className="mb-4">
          Sonke Capital maintains internal risk management frameworks designed to
          preserve capital, manage drawdowns, and ensure disciplined execution.
        </p>
        <p className="mb-4">
          Risk controls may include position sizing limits, exposure caps,
          internal reporting, and strategy-level governance.
        </p>
        <p>
          Trading in leveraged financial instruments involves substantial risk,
          and losses may exceed initial expectations.
        </p>
      </section>

      {/* FUNDING & LOANS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          5. Funding & Loan Arrangements
        </h2>
        <p className="mb-4">
          Sonke Capital may consider corporate loan arrangements from individuals
          or institutions that legally provide lending facilities.
        </p>
        <p className="mb-4">
          Any funding arrangement entered into by Sonke Capital shall be
          structured as a loan and governed by a formal written loan agreement.
        </p>
        <p className="font-medium mb-2">
          Sonke Capital does not:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Accept public deposits</li>
          <li>Offer equity to the general public</li>
          <li>Guarantee returns</li>
          <li>Promise fixed or variable profits</li>
        </ul>
      </section>

      {/* TERMS & CONDITIONS */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          6. Terms & Conditions of Use
        </h2>
        <p className="mb-4">
          By accessing or using this website, you agree to be bound by these
          terms and conditions, as well as all applicable laws and regulations of
          the Republic of South Africa.
        </p>
        <p className="mb-4">
          The information provided on this website is for general informational
          purposes only and does not constitute financial advice, investment
          advice, or an offer to invest.
        </p>
      </section>

      {/* DISCLAIMER */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          7. Disclaimer
        </h2>
        <p className="mb-4">
          Trading in financial markets involves risk. Past performance is not
          indicative of future results. Sonke Capital makes no representations
          or warranties regarding the accuracy or completeness of information
          presented.
        </p>
        <p>
          Under no circumstances shall Sonke Capital Pty Ltd be liable for any
          direct, indirect, incidental, or consequential losses arising from the
          use of this website or reliance on its content.
        </p>
      </section>

      {/* GOVERNING LAW */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          8. Governing Law
        </h2>
        <p>
          These policies and terms shall be governed by and construed in
          accordance with the laws of the Republic of South Africa.
        </p>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          9. Contact Information
        </h2>
        <p className="mb-2">
          For compliance, legal, or funding-related enquiries, please contact:
        </p>
        <p className="font-medium">
          Email: sonkecapital@outlook.com
        </p>
      </section>
    </main>
  );
}
