import { AppConfig } from 'types';

export const APP_ENV = process.env.REACT_APP_APP_ENV || 'development';

const config: AppConfig = {
  'development': {
    API_BASE_URL: 'http://localhost:8000',
  },
  'production': {
    API_BASE_URL: 'https://irs-copilot-dev-f3ffc3a3fca9.herokuapp.com',
  },
  'staging': {
    API_BASE_URL: 'https://irs-copilot-dev-f3ffc3a3fca9.herokuapp.com',
  },
};

export const currentConfig = config[APP_ENV] || config.development;

export const { API_BASE_URL } = currentConfig;

export const logAppConfig = () => {
  if(APP_ENV === 'production' || APP_ENV === 'staging') {
    console.log(`App Config: `, currentConfig);
  }
};

logAppConfig();
