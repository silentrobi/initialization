/**
 * Model for tb_merchantapplication table
 */
import { ENV_VAR } from '../config/constants.config';

const DB_SCHEMA = ENV_VAR.SCHEMA_NAME_ONBOARDING;

const modelMerchantApplication = {
  TABLE_MERCHANTAPPLICATION: `${DB_SCHEMA}.tb_merchantapplication`,
  TABLE_MERCHANTAPPLICATION_WITHOUT_SCHEMA: 'tb_merchantapplication',

  columns: {
    ID: 'id',
    MERCHANT_ID: 'merchant_id',
    APPLICATION_ID: 'application_id',
    ACTIVATION_STATUS: 'activation_status',
  },
  defaults: {
    ACTIVATION_STATUS: 0
  }
};

export { modelMerchantApplication };
