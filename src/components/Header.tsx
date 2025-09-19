'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import {
  ChevronDown,
  Users,
  CreditCard,
  UserCheck,
  FileText,
  Link,
  Menu,
  X,
  Shield,
  Briefcase,
  Building,
  Building2,
  Phone,
  Power,
  UserCircle,
  Globe,
  UserCircle2,
  Wallet,
  Home,
  DollarSign,
  Landmark
} from 'lucide-react';

export function Header() {
  const { t, i18n } = useTranslation();
  const [isPaymentSolutionsOpen, setIsPaymentSolutionsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isCompaniesOpen, setIsCompaniesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string | null>(null);

  const languages = [
    { code: 'en', name: t('languages.en') },
    { code: 'zh', name: t('languages.zh') },
    { code: 'pt', name: t('languages.pt') },
    { code: 'es', name: t('languages.es') },
    { code: 'fr', name: t('languages.fr') },
    { code: 'ja', name: t('languages.ja') },
  ];

  const handleLanguageChange = async (langCode: string) => {
    await i18n.changeLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
    setIsLanguageOpen(false);
  };

  const subsidiaries = [
    {
      name: t('home.subsidiaries.cica.name'),
      logo: '/CICA-Life-1.svg',
      title: t('home.subsidiaries.cica.title'),
      description: t('home.subsidiaries.cica.description'),
      href: '/cica-life',
    },
    {
      name: t('home.subsidiaries.citizens.name'),
      logo: '/CICA-LOA-2.svg',
      title: t('home.subsidiaries.citizens.title'),
      description: t('home.subsidiaries.citizens.description'),
      href: 'https://citizensnational.com',
    },
    {
      name: t('home.subsidiaries.security.name'),
      logo: '/SPLIC-Logo-Color-NC-3.svg',
      title: t('home.subsidiaries.security.title'),
      description: t('home.subsidiaries.security.description'),
      href: 'https://securityplanlife.com',
    },
  ];

  const aboutItems = [
    {
      title: 'Board Of Directors',
      description: 'Meet our seasoned Fintech BoD.',
      icon: Users,
      href: '#board',
    },
    {
      title: 'CICA Leadership',
      description:
        'Meet our Founder-led leadership with deep expertise across Insurance & Technology.',
      icon: Briefcase,
      href: '#leadership',
    },
    {
      title: 'Jobs',
      description:
        'CICA Life is always excited to hear from top talent - reach out.',
      icon: Building,
      href: '#jobs',
    },
    {
      title: 'Contacts For Clients',
      description: 'Enterprise & Business Client Contacts',
      icon: Phone,
      href: '#client-contacts',
    },
    {
      title: 'Contacts For Policyholders',
      description: 'Account Holders & Policy Services',
      icon: Phone,
      href: '#policyholder-contacts',
    },
  ];

  const loginOptions = [
    {
      title: 'Policy Hub',
      description: 'Access your policy details and documents',
      icon: Shield,
      href: '/policy-hub',
    },
    {
      title: 'CICA Wallet',
      description: 'Access your claims and payment wallet',
      icon: Wallet,
      href: '/claims-wallet',
    },
    {
      title: 'Shareholder Login',
      description: 'Access shareholder portal and documents',
      icon: Building,
      href: '/login/shareholder',
    },
    {
      title: 'CICA Life Policy Holder Login',
      description: 'Access your policy information',
      icon: UserCircle2,
      href: '/login/policyholder',
    },
    {
      title: 'My Security Plan Login',
      description: 'Access your security plan',
      icon: Shield,
      href: '/login/security-plan',
    },
    {
      title: 'CICA Life IC Portal',
      description: 'Insurance company portal access',
      icon: Building,
      href: '/login/ic-portal',
    },
    {
      title: 'Domestic Agent Portal',
      description: 'Portal for domestic agents',
      icon: UserCircle2,
      href: '/login/domestic-agent',
    },
    {
      title: 'Security Plan Agent Portal',
      description: 'Portal for security plan agents',
      icon: Shield,
      href: '/login/security-agent',
    },
  ];

  const moreOptions = [
    {
      title: 'Online Account Setup',
      description:
        'Create a username and password to access our CICA Mobile or User Apps and access your policy details.',
      icon: UserCircle2,
      href: '/cards/setup',
    },
    {
      title: 'Online Portal',
      description:
        'To access your account information, policies and other online features, click here.',
      icon: Building,
      href: '/cards/online-banking',
    },
    {
      title: 'Mobile App',
      description:
        'To download and start using our full-featured app designed for ease of use, start here.',
      icon: UserCircle2,
      href: '/cards/mobile-banking',
    },
    {
      title: 'Policyholder Support',
      description:
        'For all policyholder support, please call 1-855-687-2114​ or click here.',
      icon: Phone,
      href: '/cards/support',
    },
    {
      title: 'Policyholder Benefits',
      description:
        'For all Policyholder related information, agreements and links, start here.',
      icon: Shield,
      href: '/cards/benefits',
    },
    {
      title: 'Policy Balance',
      description:
        'For all Policyholder related information, agreements and links, start here.',
      icon: CreditCard,
      href: '/cards/rewards',
    },
    {
      title: 'Activate Policy',
      description:
        'If you received a CICA Life policy and need to activate it, start here.',
      icon: Power,
      href: '/cards/activate',
    },
    {
      title: 'Policyholder Portal',
      description:
        'For all Policyholder related information, agreements and links, start here.',
      icon: UserCircle,
      href: '/cards/portal',
    },
  ];

  // Mega Menu Structure for Demo Pages
  const megaMenuCategories = [
    {
      title: "Incoming Payment Solutions",
      description: "Process premium payments and manage policy information",
      items: [
        {
          title: 'Premium Pay - Agent',
          description: 'Process premium payments for insurance agents',
          icon: CreditCard,
          href: '/premium-pay-agent',
        },
        {
          title: 'Premium Pay - Client',
          description: 'Pay your insurance premium securely and conveniently',
          icon: CreditCard,
          href: '/premium-pay-client',
        },
        {
          title: 'Policy Hub',
          description: 'Access and manage your policy details and documents',
          icon: FileText,
          href: '/policy-hub',
        }
      ]
    },
    {
      title: "Outgoing Payment Solutions",
      description: "Process payments to claimants, partners, and service providers",
      items: [
        {
          title: t('header.insurance.link.title'),
          description: 'Create a one-time payment link with customizable options',
          icon: Link,
          href: '/pay-link',
        },
        {
          title: t('header.insurance.partners.title'),
          description: 'Process payments to partners, agents, and service providers',
          icon: Building2,
          href: '/pay-partners',
        },
        {
          title: t('header.insurance.claim.title'),
          description: 'Pay claims instantly with flexible payment methods',
          icon: CreditCard,
          href: '/claim-payment-lander',
        }
      ]
    },
    {
      title: "Claims Wallet",
      description: "Manage claims funds and payment options",
      items: [
        {
          title: 'Claimant Verification',
          description: 'Verify your identity to access claims and payments',
          icon: UserCheck,
          href: '/claimant-verification',
        },
        {
          title: 'Virtual Claims Card',
          description: 'Issue instant virtual cards for claims payments',
          icon: CreditCard,
          href: '/virtual-claims-card',
        },
        {
          title: 'Claims Wallet',
          description: 'Access your claims and payment wallet',
          icon: Wallet,
          href: '/claims-wallet',
        },
        {
          title: 'Claims Wallet Plus',
          description: 'Enhanced claims wallet with virtual card and advanced features',
          icon: Wallet,
          href: '/claims-wallet-plus',
        }
      ]
    }
  ];

  // Payment Solutions mega menu categories
  const paymentSolutionsCategories = [
    {
      title: "Incoming Payments",
      description: "Solutions for processing premium payments and policy purchases",
      items: [
        {
          title: 'Incoming Payments Summary',
          description: 'Overview of our incoming payment solutions',
          icon: DollarSign,
          href: '/incoming-payments',
          divider: true,
          isSummary: true
        },
        {
          title: 'Premium Pay - Agent',
          description: 'Process premium payments for insurance agents',
          icon: CreditCard,
          href: '/premium-pay-agent',
        },
        {
          title: 'Premium Pay - Client',
          description: 'Pay your insurance premium securely and conveniently',
          icon: CreditCard,
          href: '/premium-pay-client',
        },
        {
          title: 'Policy Hub',
          description: 'Access and manage your policy details and documents',
          icon: FileText,
          href: '/policy-hub',
        }
      ]
    },
    {
      title: "Outgoing Payments",
      description: "Solutions for processing claims and beneficiary payments",
      items: [
        {
          title: 'Outgoing Payments Summary',
          description: 'Overview of our outgoing payment solutions',
          icon: DollarSign,
          href: '/outgoing-payments',
          divider: true,
          isSummary: true
        },
        {
          title: 'Pay Link',
          description: 'Create a one-time payment link with customizable options',
          icon: Link,
          href: '/pay-link',
        },
        {
          title: 'Pay Partners',
          description: 'Process payments to partners, agents, and service providers',
          icon: Building2,
          href: '/pay-partners',
        },
        {
          title: 'Pay Claims',
          description: 'Pay claims instantly with flexible payment methods',
          icon: CreditCard,
          href: '/claim-payment-lander',
        }
      ]
    },
    {
      title: "Domestic & International",
      description: "Solutions for processing payments domestically and globally",
      items: [
        {
          title: 'Domestic Payments Summary',
          description: 'Payment solutions for the United States',
          icon: Home,
          href: '/domestic-payments',
          isSummary: true
        },
        {
          title: 'International Payments Summary',
          description: 'Global payment solutions for cross-border transactions',
          icon: Globe,
          href: '/international-payments',
          divider: true,
          isSummary: true
        },
        {
          title: 'Virtual Claims Card',
          description: 'Issue instant virtual cards for claims payments',
          icon: CreditCard,
          href: '/virtual-claims-card',
        },
        {
          title: 'Claims Wallet Solutions',
          description: 'Digital wallet solutions for managing claim funds',
          icon: Wallet,
          href: '/claims-wallet',
        }
      ]
    }
  ];

  // On mobile, handle category expansion
  const handleMobileCategory = (category: string) => {
    setMobileCategory(mobileCategory === category ? null : category);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-[#f9fafb]/80 dark:bg-[#0F172A]/80 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex-none">
          <a href="/" className="block">
            <img
              src="Juice.png"
              alt="Juice"
              className="h-8"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-grow gap-8">
          {/* Main Navigation Items */}
          <div className="flex items-center gap-8">
            {/* Payment Solutions Mega Menu */}
            <div className="relative">
              <button
                onClick={() => setIsPaymentSolutionsOpen(!isPaymentSolutionsOpen)}
                onBlur={() => setTimeout(() => setIsPaymentSolutionsOpen(false), 200)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center gap-1"
              >
                PAYMENT SOLUTIONS
                <ChevronDown className="h-4 w-4" />
              </button>

              {isPaymentSolutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px] max-w-[90vw] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 p-6 max-h-[80vh] overflow-y-auto">
                  <div className="grid grid-cols-3 gap-8">
                    {paymentSolutionsCategories.map((category, idx) => (
                      <div key={idx} className="space-y-4">
                        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{category.description}</p>
                        </div>
                        <div className="grid gap-3">
                          {category.items.map((item, itemIdx) => {
                            const Icon = item.icon;
                            return (
                              <React.Fragment key={itemIdx}>
                                <a
                                  href={item.href}
                                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                  <div className="flex-none">
                                    <div className={`p-2 rounded-lg ${item.isSummary 
                                      ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400' 
                                      : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'}`}>
                                      <Icon className="h-5 w-5" />
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                                      {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                                {item.divider && (
                                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                                )}
                              </React.Fragment>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* FAQs Link (formerly RFP Link) */}
            <div className="relative">
              <a
                href="/rfp"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              >
                FAQs
              </a>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Language Switcher */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              onBlur={() => setTimeout(() => setIsLanguageOpen(false), 200)}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              <Globe className="h-5 w-5" />
            </button>

            {isLanguageOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 py-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 ${
                      i18n.language === lang.code
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-[#f9fafb] dark:bg-[#0F172A]"
          >
            <div className="p-4 space-y-6">
              {/* Payment Solutions Categories Mobile */}
              <div className="space-y-2">
                <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                  PAYMENT SOLUTIONS
                </div>
                
                {paymentSolutionsCategories.map((category, idx) => (
                  <div key={idx} className="mb-3">
                    <button
                      onClick={() => handleMobileCategory(category.title)}
                      className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                    >
                      <span className="font-medium">{category.title}</span>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform ${mobileCategory === category.title ? 'rotate-180' : ''}`}
                      />
                    </button>
                    
                    {mobileCategory === category.title && (
                      <div className="mt-2 ml-4 space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <React.Fragment key={itemIdx}>
                            <a
                              href={item.href}
                              className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                            >
                              <div className="flex items-center gap-2">
                                <div className={`p-1.5 rounded-md ${item.isSummary 
                                  ? 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400' 
                                  : 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400'}`}>
                                  <item.icon className="h-4 w-4" />
                                </div>
                                <div className="font-medium">{item.title}</div>
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {item.description}
                              </div>
                            </a>
                            {item.divider && (
                              <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* FAQs Link (formerly RFP Link) */}
              <div className="space-y-2">
                <a
                  href="/rfp"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <div className="font-medium">FAQs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Frequently Asked Questions
                  </div>
                </a>
              </div>

              {/* Language Selector */}
              <div className="space-y-2">
                <div className="font-medium text-sm text-gray-600 dark:text-gray-400">
                  Language
                </div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      i18n.language === lang.code
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
