/**
 * Model for tb_application table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelApplication_v01 = {
  TABLE_APPLICATION: `${DB_SCHEMA}.tb_application`,
  TABLE_APPLICATION_WITHOUT_SCHEMA: 'tb_application',

  columns: {
    ID: 'id',
    NAME: 'application_name',
    PARAMETERS: 'application_parameters',
    KEY: 'application_key',
    AVATAR_PATH: 'avatar_path',
    CATEGORY: 'category',
  },
};

const modelApplication = {
  TABLE_APPLICATION: `${DB_SCHEMA}.tb_application`,
  TABLE_APPLICATION_WITHOUT_SCHEMA: 'tb_application',

  columns: {
    ID: 'id',
    NAME: 'application_name',
    KEY: 'application_key',
    AVATAR_PATH: 'avatar_path',
    CATEGORY: 'category',
    CLIENT_ID: 'client_id',
    CLIENT_SECRET: 'client_secret',
    WEBHOOK_URL: 'webhook_url',
    WEBHOOK_USERNAME: 'webhook_username',
    WEBHOOK_PASSWORD: 'webhook_password',
  },
};

export { modelApplication };
