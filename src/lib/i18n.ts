import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      languages: {
        en: 'English',
        zh: '中文',
        pt: 'Português',
        es: 'Español',
        fr: 'Français',
        ja: '日本語'
      },
      home: {
        subsidiaries: {
          cica: {
            name: 'CICA Life',
            title: 'Life Insurance Solutions',
            description: 'Comprehensive life insurance products and services'
          },
          citizens: {
            name: 'Citizens National',
            title: 'Banking Services',
            description: 'Full-service banking and financial solutions'
          },
          security: {
            name: 'Security Plan Life',
            title: 'Security Solutions',
            description: 'Advanced security and protection services'
          }
        }
      },
      header: {
        insurance: {
          link: {
            title: 'Pay Link'
          },
          partners: {
            title: 'Pay Partners'
          },
          claim: {
            title: 'Pay Claims'
          }
        }
      }
    }
  },
  zh: {
    translation: {
      languages: {
        en: 'English',
        zh: '中文',
        pt: 'Português',
        es: 'Español',
        fr: 'Français',
        ja: '日本語'
      },
      home: {
        subsidiaries: {
          cica: {
            name: 'CICA Life',
            title: '人寿保险解决方案',
            description: '全面的人寿保险产品和服务'
          },
          citizens: {
            name: 'Citizens National',
            title: '银行服务',
            description: '全方位银行和金融解决方案'
          },
          security: {
            name: 'Security Plan Life',
            title: '安全解决方案',
            description: '先进的安全和保护服务'
          }
        }
      },
      header: {
        insurance: {
          link: {
            title: '支付链接'
          },
          partners: {
            title: '合作伙伴支付'
          },
          claim: {
            title: '理赔支付'
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
