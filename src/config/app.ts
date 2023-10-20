import { AppConfig } from 'types';
import { LOCAL_BASE_URL, PROD_BASE_URL, STAGING_BASE_URL } from 'utils/constants';

export const APP_ENV = process.env.REACT_APP_APP_ENV || 'development';

const config: AppConfig = {
  'development': {
    API_BASE_URL: LOCAL_BASE_URL,
  },
  'production': {
    API_BASE_URL: PROD_BASE_URL,
  },
  'staging': {
    API_BASE_URL: STAGING_BASE_URL,
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
