'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { Card } from '@/components/ui/card';
import {
  Globe,
  Building,
  User,
  DollarSign,
  Layers,
  FileSignature,
  Archive,
  TrendingUp,
  Users,
  Gavel,
  Shield,
  BarChart,
  CreditCard,
  Flag,
  Lightbulb,
  Search,
} from 'lucide-react';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const { t } = useTranslation();

  // Define cards data
  const cardsData: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[] = [
    {
      title: t('National and International Tax Planning'),
      description: t(
        'We design strategies to optimize taxes across different jurisdictions.'
      ),
      icon: Globe,
    },
    {
      title: t('Strategies to Minimize Taxes and Maximize Benefits'),
      description: t(
        'We create effective plans to reduce tax burdens and increase profits.'
      ),
      icon: TrendingUp,
    },
    {
      title: t(
        'Advisory and Support for Relocating Individuals or Companies to Other Jurisdictions'
      ),
      description: t('We facilitate legal and financial relocations.'),
      icon: User,
    },
    {
      title: t('Company Formation and Registration in Different Countries'),
      description: t(
        'We guide you to establish companies in compliance with local laws.'
      ),
      icon: Building,
    },
    {
      title: t('Application and Obtaining Residency Permits'),
      description: t(
        'We accompany the migration process to ensure legal stays.'
      ),
      icon: Flag,
    },
    {
      title: t('Business Valuation'),
      description: t(
        'We carry out precise valuations for corporate transactions.'
      ),
      icon: DollarSign,
    },
    {
      title: t('Advisory on Mergers, Acquisitions, and Restructuring'),
      description: t(
        'We optimize business operations and corporate structures.'
      ),
      icon: Layers,
    },
    {
      title: t('Review and Drafting of Legal Contracts'),
      description: t('We ensure clear and compliant documents.'),
      icon: FileSignature,
    },
    {
      title: t('Estate Planning and Organization'),
      description: t(
        'We ensure the correct distribution of assets and properties according to your wishes.'
      ),
      icon: Archive,
    },
    {
      title: t(
        'Strategies to Reduce Tax Burden and Increase Financial Efficiency'
      ),
      description: t(
        'We design tax-saving plans and better economic management.'
      ),
      icon: TrendingUp,
    },
    {
      title: t('Advice and Strategies for Senior Management'),
      description: t(
        'We offer key guidance in decision-making and business leadership.'
      ),
      icon: Users,
    },
    {
      title: t('Resolution of Commercial Disputes through Arbitration'),
      description: t(
        'We resolve conflicts in different jurisdictions without going to courts.'
      ),
      icon: Gavel,
    },
    {
      title: t('Review and Audit of Accounts'),
      description: t(
        'We verify the accuracy and compliance of financial records.'
      ),
      icon: BarChart,
    },
    {
      title: t('Advisory for Accessing Financing'),
      description: t(
        'We connect you with loans, investors, or capital markets.'
      ),
      icon: CreditCard,
    },
    {
      title: t('Management and Resolution of Disputes with Tax Authorities'),
      description: t('We defend your interests before tax authorities.'),
      icon: Shield,
    },
    {
      title: t('Business Plan Development and Startup Support'),
      description: t('We promote the creation and growth of new businesses.'),
      icon: Lightbulb,
    },
    {
      title: t('Financial Investigation and Analysis Against Fraud'),
      description: t(
        'We identify economic irregularities and illicit activities.'
      ),
      icon: Search,
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName={t('National and International Tax Planning')}
        description={t(
          'Strategies to minimize taxes and maximize benefits at national and international levels'
        )}
      />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, idx) => (
            <Card
              key={idx}
              className="bg-transparent p-6 rounded-xl border-none shadow-none transition-transform hover:scale-[1.01]"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-b from-[#DAC48B] to-[#CBA84F] rounded-[4px]">
                <card.icon className="h-7 w-7 text-hero-dark" />
              </div>
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p
                className={`font-elysium-text-body-l-elysium text-projects-colorstylesdisable-text text-left`}
              >
                {card.description}
              </p>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
