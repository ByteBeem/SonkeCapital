'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  LineChart,
  ShieldCheck,
  Mail,
  Phone,
  Users,
  FileCheck,
  Building2,
  Scale,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function HomeClient() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-blue-900">Sonke Capital</h1>
          <div className="hidden md:flex gap-8 font-medium text-sm text-gray-700">
            <Link href="/about">About</Link>
            <Link href="/trading">Trading</Link>
            <Link href="/funding">Funding</Link>
            <Link href="/team">Team</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-36 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Proprietary Trading Firm
              <span className="block text-blue-200 text-4xl mt-3">
                Company Capital Only
              </span>
            </h1>

            <p className="text-blue-100 text-lg mb-10">
              Sonke Capital is a South African proprietary trading company focused
              on disciplined capital deployment across forex, CFDs, synthetic
              indices, and related instruments — trading exclusively with its
              own balance sheet.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#funding"
                className="inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
              >
                Funding & Loan Enquiries <ArrowRight />
              </a>

              <Link
                href="/compliance"
                className="inline-flex items-center gap-3 border border-white/40 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
              >
                Regulatory Position
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center">
          <TrustItem text="CIPC Registered Company" />
          <TrustItem text="B-BBEE Compliant" />
          <TrustItem text="Proprietary Trading Only" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              About Sonke Capital
            </h2>
            <p className="text-lg mb-6">
              Sonke Capital Pty Ltd is registered with the Companies and
              Intellectual Property Commission (CIPC) of South Africa and
              maintains valid B-BBEE status.
            </p>
            <p className="text-lg">
              The firm operates strictly as a proprietary trading company and
              does not offer financial services, portfolio management, or trade
              on behalf of clients.
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl p-10 space-y-4">
            <Principle text="Independent capital deployment" />
            <Principle text="Strict internal risk governance" />
            <Principle text="No client funds accepted" />
            <Principle text="Institutional-grade discipline" />
          </div>
        </div>
      </section>

      {/* TRADING */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            Trading Activities
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <InfoCard
              icon={<LineChart size={36} />}
              title="Markets Traded"
              desc="Forex, CFDs, synthetic indices, commodities, and related instruments."
            />
            <InfoCard
              icon={<ShieldCheck size={36} />}
              title="Risk Management"
              desc="Capital preservation frameworks, strict drawdown limits, and disciplined exposure controls."
            />
            <InfoCard
              icon={<Scale size={36} />}
              title="Strategy Framework"
              desc="Research-driven strategies executed under controlled and measurable conditions."
            />
          </div>
        </div>
      </section>

      {/* FUNDING */}
      <section id="funding" className="py-28 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Building2 size={42} className="mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">
            Funding & Loan Opportunities
          </h2>
          <p className="text-blue-100 mb-10">
            Sonke Capital may consider structured corporate loan arrangements
            from individuals or institutions offering compliant lending
            solutions.
          </p>

          <p className="font-semibold mb-2">Submit proposals via email:</p>
          <p className="text-xl">sonkecapital@outlook.com</p>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            Company Leadership
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <TeamCard
              role="Founder & Director"
              name="Donald Mxolisi Mohlala"
              email="donald.mxolisi@proton.me"
              phone="078 104 5677"
            />
            <TeamCard role="Head of Trading" name="Senior Trader" />
            <TeamCard
              role="Compliance & Risk Officer"
              name="Risk & Governance"
            />
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-28 bg-gray-100 text-center">
        <FileCheck size={40} className="mx-auto mb-4 text-blue-900" />
        <h2 className="text-3xl font-bold mb-4">
          Regulatory & Legal Status
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700">
          Sonke Capital Pty Ltd is a proprietary trading company registered with
          CIPC, B-BBEE compliant, and does not require FSCA licensing as it does
          not offer financial services or manage client funds.
        </p>

        <p className="mt-4 text-sm text-gray-600">
          Company Registration Number:{' '}
          <strong>TO BE INSERTED</strong>
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-28 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Sonke Capital</h2>
        <p className="text-lg mb-2">Funding & loan enquiries only</p>
        <p className="text-xl font-semibold">sonkecapital@outlook.com</p>

        <div className="mt-6 flex justify-center gap-6 text-gray-600">
          <span className="flex items-center gap-2">
            <Mail size={18} /> Email
          </span>
          <span className="flex items-center gap-2">
            <Phone size={18} /> Phone on request
          </span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-12 text-center">
        <p>
          © {new Date().getFullYear()} Sonke Capital Pty Ltd. All rights reserved.
        </p>
        <p className="text-sm text-blue-200 mt-3">
          Proprietary Trading Company • Company Capital Only • No Client Funds
        </p>
      </footer>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */



function InfoCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-xl transition">
      <div className="text-blue-900 mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}


function TeamCard({ role, name, email, phone }: { role: string; name: string; email?: string; phone?: string }) {
  return (
    <div className="bg-gray-50 p-10 rounded-3xl shadow text-center">
      <Users size={36} className="mx-auto text-blue-900 mb-4" />
      <h4 className="text-xl font-semibold">{name}</h4>
      <p className="text-gray-700 font-medium mb-2">{role}</p>
      {email && <p className="text-sm">{email}</p>}
      {phone && <p className="text-sm">{phone}</p>}
    </div>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 font-medium text-gray-700">
      <CheckCircle2 className="text-blue-900" size={20} />
      {text}
    </div>
  );
}


function Principle({ text }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="text-blue-900" size={18} />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
