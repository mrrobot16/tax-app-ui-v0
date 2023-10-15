import { AppConfig } from 'types';

const APP_ENV = process.env.NEXT_PUBLIC_APP_ENV || 'development';

const config: AppConfig = {
  'development': {
    API_BASE_URL: 'http://localhost:8000',
  },
  'production': {
    API_BASE_URL: 'http://localhost:8000',
  },
  'staging': {
    API_BASE_URL: 'http://localhost:8000',
  },
};

const currentConfig = config[APP_ENV] || config.development;

export const { API_BASE_URL } = currentConfig;
