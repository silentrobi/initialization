/**
 * Model for tb_authorization table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelAuthorization = {
  TABLE_AUTHORIZATION: `${DB_SCHEMA}.tb_authorization`,
  TABLE_AUTHORIZATION_WITHOUT_SCHEMA: 'tb_authorization',

  columns: {
    ID: 'id',
    GSM: 'gsm',
    CODE: 'code',
    TYPE: 'type',
    EXPIRATION_DATE: 'expiration_date',
    ACCEPTED_DATE: 'accepted_date',
  },
};

export { modelAuthorization };
